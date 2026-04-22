import 'dotenv/config'

export const env = {
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    HOSTNAME: process.env.HOSTNAME,
    DATABASE_NAME: process.env.DATABASE_NAME
}
