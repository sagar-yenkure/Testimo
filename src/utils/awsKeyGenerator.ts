import config from "../config";


const awsKeyGenerator = (key: string) =>
  `https://${config.AWS_KEYS.bucket}.s3.${config.AWS_KEYS.region}.amazonaws.com/${key}`;

export default awsKeyGenerator;
