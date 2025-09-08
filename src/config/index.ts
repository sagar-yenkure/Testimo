export default {
  AWS_KEYS: {
    region: process.env.AMAZON_REGION,
    accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
    secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
    bucket: process.env.AMAZON_BUCKET_NAME,
  },
  JWT_SECRET: process.env.JWT_SECRET,
};
