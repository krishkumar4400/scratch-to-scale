import "dotenv/config";

const env = {
    PORT: process.env.PORT!,
    MONGO_URI: process.env.MONGO_URI!,
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY!,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY!,
    COHERE_API_KEY: process.env.COHERE_API_KEY!
};

export default env;
