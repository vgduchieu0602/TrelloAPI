import mongoose from 'mongoose'
import 'dotenv/config'

const connectString = process.env.MONGO_URI

class Database {
    constructor() {
        
    }

    async connect(type = 'mongodb') {
        if(mongoose.connection.readyState === 1) return
        await mongoose.connect(connectString, {
            maxPoolSize: 100
        })
            .then(() => {
                console.log(`Connect to MongoDB successfully`)
            })
            .catch((err) => {
                console.log(`Error connect`)
            })
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

export default instanceMongodb



