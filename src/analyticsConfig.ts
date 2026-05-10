import googleAnalytics from "@analytics/google-analytics";
import Analytics from "analytics";
import config from "~/config";

const analyticsConfig: Parameters<typeof Analytics>[0] = {
  app: "anthonyjcastro.com",
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    googleAnalytics({
      measurementIds: [config.GOOGLE_ANALYTICS_MEASUREMENT_ID],
    }),
  ],
};

export default analyticsConfig;
