const environment =
  process.env.BUILD_ENV === "production" ? "production" : "development";

const config = {
  ENVIRONMENT: environment,
  GOOGLE_ANALYTICS_MEASUREMENT_ID:
    process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID,
};

export default config;
