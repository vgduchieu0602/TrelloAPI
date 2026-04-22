import express from 'express'
import {StatusCodes} from 'http-status-codes'
import {boardValidation} from '../../validations/boardValidation.js'
import {boardController} from '../../controllers/board.controller.js'

const router = express.Router()

router.route('/')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({message: 'GET: API get list boards'})
    })
    .post(boardValidation.createNew, boardController.createNew)

export const boardRoutes = router