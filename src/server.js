import express from 'express'
import instanceMongoDB from './config/mongodb.js'
import { env } from './config/enviroments.js'
import { APIs_V1 } from './routes/v1/index.js'

const app = express()

app.use(express.json())

app.use('/v1', APIs_V1)

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
