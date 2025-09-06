import config from "@/config";
import { S3Client } from "@aws-sdk/client-s3";

if (!config.AWS_KEYS.accessKeyId || !config.AWS_KEYS.secretAccessKey || !config.AWS_KEYS.region) throw new Error("AWS API keys are required")

export const s3 = new S3Client({
  region: config.AWS_KEYS.region,
  credentials: {
    accessKeyId: config.AWS_KEYS.accessKeyId,
    secretAccessKey: config.AWS_KEYS.secretAccessKey,
  },
});
