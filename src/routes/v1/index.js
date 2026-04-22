import express from 'express'
import {StatusCodes} from 'http-status-codes'
import {boardRoutes} from './boardRoutes.js'

const router = express.Router()

router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({message: 'API v1 is running'})
})

router.use('/boards', boardRoutes)

export const APIs_V1 = router