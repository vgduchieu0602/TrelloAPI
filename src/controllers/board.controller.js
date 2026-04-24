import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { boardService } from "../services/board.service.js";

const createNew = async (req, res, next) => {
    try {
        const createdBoard = await boardService.createNew(req.body)
        
        res
            .status(StatusCodes.CREATED)
            .json({ 
                message: 'Board created successfully',
                data: createdBoard
            })
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
