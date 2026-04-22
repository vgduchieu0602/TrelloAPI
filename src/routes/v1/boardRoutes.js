import express from 'express'
import {StatusCodes} from 'http-status-codes'
import {boardValidation} from '../../validations/boardValidation.js'

const router = express.Router()

router.route('/')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({message: 'GET: API get list boards'})
    })
    .post(boardValidation.createNew)

export const boardRoutes = router