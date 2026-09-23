/**
 * Leon's Lab - Booking Automation Sales Funnel Engine
 * 
 * Architecture:
 * 1. Third-Party Lead Ingestion via Tally Form (https://tally.so/r/jaNPeJ)
 * 2. Dedicated Instant Live Booking via Zoom-Connected Calendly
 * 3. Tally & Funnel Conversion Event Listeners
 */

const FUNNEL_CONFIG = {
  notificationEmail: "hello.meareg@gmail.com",
  calendlyUrl: "https://calendly.com/hello-meareg/30-min-booking-leak-audit-walkthrough",
  tallyFormUrl: "https://tally.so/r/jaNPeJ",
};

document.addEventListener("DOMContentLoaded", () => {
  // Extract UTM parameters for lead attribution
  const urlParams = new URLSearchParams(window.location.search);
  const attribution = {
    utm_source: urlParams.get("utm_source") || "direct",
    utm_medium: urlParams.get("utm_medium") || "none",
    utm_campaign: urlParams.get("utm_campaign") || "organic",
    utm_content: urlParams.get("utm_content") || "",
    referrer: document.referrer || "direct",
    landing_url: window.location.href,
  };

  /**
   * Funnel Analytics Event Tracker
   */
  function trackFunnelEvent(eventName, eventData = {}) {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventData,
      ...attribution,
    };
    window.dispatchEvent(new CustomEvent("funnel_event", { detail: payload }));
    console.info(`[Funnel Event] ${eventName}:`, payload);
  }

  // Track initial page view with attribution
  trackFunnelEvent("landing_page_viewed");

  // Track clicks on primary audit CTA buttons
  document.querySelectorAll('a[href="#audit"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      trackFunnelEvent("audit_cta_clicked", { buttonText: btn.textContent.trim() });
    });
  });

  // Track clicks on booking CTA buttons
  document.querySelectorAll('a[href*="calendly.com"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      trackFunnelEvent("calendly_cta_clicked", { url: btn.href });
    });
  });

  // Listen for Tally form submission events
  window.addEventListener("message", (event) => {
    try {
      // Tally sends postMessage events on submission
      if (typeof event.data === "string" && event.data.includes("Tally.FormSubmitted")) {
        const data = JSON.parse(event.data);
        trackFunnelEvent("tally_form_submitted", { formId: data?.payload?.formId || "jaNPeJ" });
        console.log("%c✓ Tally Lead Form Submitted successfully!", "color: #4ade80; font-weight: bold; font-size: 14px;");
      }
    } catch (e) {
      // Ignore unparsed messages
    }
  });
});
