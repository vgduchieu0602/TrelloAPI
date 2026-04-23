import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { boardService } from "../services/board.service.js";

const createNew = async (req, res, next) => {
    try {
        // res
        //     .status(StatusCodes.CREATED)
        //     .json({ message: 'POST from Controller: API create new board' })
        const createdBoard = await boardService.createNew(req.body)
        

        throw new ApiError(StatusCodes.BAD_REQUEST, 'Bad Request')
    } catch (error) {
        // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        //     errors: error.message
        // })
        next(error)
    }
}

export const boardController = {
    createNew
}
