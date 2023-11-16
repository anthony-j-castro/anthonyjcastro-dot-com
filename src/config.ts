const environment =
  process.env.NODE_ENV === "production" ? "production" : "development";

const config = {
  ENVIRONMENT: environment,
  GOOGLE_ANALYTICS_MEASUREMENT_ID: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
};

export default config;
