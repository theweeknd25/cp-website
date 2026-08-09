export function trackEvent(
  event: string,
  parameters: Record<string, unknown> = {},
) {
  console.log("📊 Tracking:", event, parameters);

  if (typeof window.gtag !== "function") {
    console.warn("Google Analytics not loaded");
    return;
  }

  window.gtag("event", event, parameters);
}