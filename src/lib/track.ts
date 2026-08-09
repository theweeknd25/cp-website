export function trackEvent(
  event: string,
  parameters?: Record<string, unknown>,
) {
  console.log("Tracking:", event);

  if (typeof window.gtag !== "function") return;

  window.gtag("event", event, parameters);
}