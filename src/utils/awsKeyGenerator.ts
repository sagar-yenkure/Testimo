import { AWS_KEYS } from "@/constants";

const awsKeyGenerator = (key: string) =>
  `https://${AWS_KEYS.bucket}.s3.${AWS_KEYS.region}.amazonaws.com/${key}`;

export default awsKeyGenerator;
