import { AWS_KEYS } from "@/constants";
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: AWS_KEYS.region,
  credentials: {
    accessKeyId: AWS_KEYS.accessKeyId,
    secretAccessKey: AWS_KEYS.secretAccessKey,
  },
});
