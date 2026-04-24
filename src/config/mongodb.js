import mongoose from 'mongoose'
import 'dotenv/config'
import { env } from './environments.js'

const connectString = process.env.MONGO_URI

class Database {
    constructor() {
        
    }
    
    async connect(type = 'mongodb') {
        if(mongoose.connection.readyState === 1) {
            console.log('Already connected to MongoDB')
            return
        }
        
        await mongoose.connect(connectString, {
            maxPoolSize: 100,
            dbName: env.DATABASE_NAME
        })
            .then(() => {
                console.log(`Connect to MongoDB successfully - Database: ${env.DATABASE_NAME}`)
            })
            .catch((err) => {
                console.error(`Error connecting to MongoDB: ${err.message}`)
                throw err
            })
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }

    get db() {
        return mongoose.connection.db
    }
}

const instanceMongodb = Database.getInstance()

export default instanceMongodb



