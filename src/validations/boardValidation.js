import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(50).trim().strict().messages({
            'any.required':'{#label} is required',
            'string.empty': '{#label} is not allowed to be empty',
            'string.min': '{#label} min 3 chars',
            'string.max': '{#label} max 50 chars',
            'string.trim': '{#label} must not have leading or trailing whitespace'
        }),
        description: Joi.string().required().min(3).max(256).trim().strict().messages({
            'any.required':'{#label} is required',
            'string.empty': '{#label} is not allowed to be empty',
            'string.min': '{#label} min 3 chars',
            'string.max': '{#label} max 256 chars',
            'string.trim': '{#label} must not have leading or trailing whitespace'
        }),
    })

    try {
        await correctCondition.validateAsync(req.body, { abortEarly: false })

        next()

        
    } catch (error) {
        const errorMessage = new Error(error).message
        const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
        next(customError)

        // res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        //     errors: new Error(error).message
        // })
    }
}

export const boardValidation = {
    createNew
}


