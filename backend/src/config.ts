const development = {
  appSecret: "!2EAS67B9"
};

const production = {};

const config =
  process.env.NODE_ENV === "production "
    ? { ...development, ...production }
    : development;

export default config;
