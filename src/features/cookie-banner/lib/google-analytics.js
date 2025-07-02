// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { env } from "@/env";

export const googleAnaliticsCookieNames = ["_ga", "_ga_2KJ9X0CKCB"];

export function loadGoogleAnalytics() {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`;
  script.async = true;
  document.body.appendChild(script);

  // eslint-disable-next-line
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
}
