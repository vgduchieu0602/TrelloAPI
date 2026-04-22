import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(50).trim().strict().messages({
            'any.required':'{#label} is required',
            'string.empty': '{#label} is not allowed to be empty',
            'string.min': '{#label} min 3 chars',
            'string.max': '{#label} max 50 chars',
            'string.trim': '{#label} must not have leading or trailing whitespace'
        }),
        description: Joi.string().required().min(3).max(256).trim().strict(),
    })

    try {
        await correctCondition.validateAsync(req.body, { abortEarly: false })

        next()

        
    } catch (error) {
        console.log(new Error(error))
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })
    }
}

export const boardValidation = {
    createNew
}


