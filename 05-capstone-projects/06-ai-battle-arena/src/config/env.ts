import "dotenv/config";

type CONFIG = {
  readonly GOOGLE_API_KEY: string,
  readonly MISTRAL_API_KEY: string,
  readonly COHERE_API_KEY: string,
  readonly PORT: string,
  readonly MONGO_URI: string,
}

const env: CONFIG = {
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY!,
  MISTRAL_API_KEY: process.env.MISTRAL_API_KEY!,
  COHERE_API_KEY: process.env.COHERE_API_KEY!,
  PORT: process.env.PORT!,
  MONGO_URI: process.env.MONGO_URI!,
};

export default env;
