const config = {
  PORT: process.env.PORT,
  ENV: process.env.ENV,
  MONGO_URL: process.env.MONGO_URL,
  AWS: {
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_BUCKET,
    keyId: process.env.AWS_KEY_ID,
    keySecret: process.env.AWS_KEY_SECRET,
  },
};

module.exports = {
  config,
};
