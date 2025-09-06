export default {
    AWS_KEYS: {
        region: process.env.AMAZON_REGION,
        accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
        secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
        bucket: process.env.AMAZON_BUCKET_NAME,
    },

    REDIS_URL: process.env.REDIS_URL,
}