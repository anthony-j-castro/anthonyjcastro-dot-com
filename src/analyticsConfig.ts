import googleAnalytics from "@analytics/google-analytics";
import config from "~/config";

const analyticsConfig = {
  app: "anthonyjcastro.com",
  plugins: [
    googleAnalytics({
      measurementIds: [config.GOOGLE_ANALYTICS_MEASUREMENT_ID],
    }),
  ],
};

export default analyticsConfig;
