import { analytics } from "@/config/analytics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initializeAnalytics() {
  if (!analytics.measurementId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;

  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", analytics.measurementId, {
  page_path: window.location.pathname,
  page_location: window.location.href,
  send_page_view: true,
  debug_mode: true,
});
}

export function trackEvent(
  event: string,
  parameters?: Record<string, unknown>,
) {
  if (!window.gtag) return;

  window.gtag("event", event, parameters);
}