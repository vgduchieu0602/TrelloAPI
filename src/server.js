import express from 'express'
import mongoose from 'mongoose'
import instanceMongoDB from './config/mongodb.js'
import { env } from './config/enviroments.js'

const app = express()

const START_SERVER = async () => {
    try {
        await instanceMongoDB.connect()

        app.listen(env.PORT, () => {
            console.log(`Server is running at http://${env.HOSTNAME}:${env.PORT}`)
        })
    } catch (error) {
        console.log(`Server failt to start: ${error}`)
        process.exit(1)
    }
}

START_SERVER()
