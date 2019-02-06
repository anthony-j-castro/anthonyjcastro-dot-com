const development = {
  GOOGLE_ANALYTICS_ID: 'UA-133883631-2',
};

const production = {
  GOOGLE_ANALYTICS_ID: 'UA-133883631-1',
};

const config = (process.env.NODE_ENV === 'production') ? production : development;

export default config;
