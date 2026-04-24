import Joi from "joi";
import {OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE} from '../utils/validators.js'
import instanceMongodb from '../config/mongodb.js'

//Define Collection (Name & Schema)
const BOARD_COLLECTION_NAME = 'boards'
const BOARD_COLLECTION_SCHEMA = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    slug: Joi.string().required().min(3).trim().strict(),
    description: Joi.string().required().min(3).max(255).trim().strict(),

    columnOrderIds: Joi.array().items(
        Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
    ).default([]),

    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updatedAt: Joi.date().timestamp('javascript').default(null),
    _destroy: Joi.boolean().default(false)
})

const createNew = async (data) => {
    try {
        const createdBoard = await instanceMongodb.db.collection(BOARD_COLLECTION_NAME).insertOne(data)
        // Return the created board with the inserted ID
        return {
            ...data,
            _id: createdBoard.insertedId
        }
    } catch (error) {
        console.error('Error creating board:', error.message)
        throw new Error(error.message)
    }
}

 const findOneById = async (id) => {
        try {
            const result = await instanceMongodb.db.collection(BOARD_COLLECTION_NAME).findOne({
                _id: id
            })
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

export const boardModel = {
    BOARD_COLLECTION_NAME,
    BOARD_COLLECTION_SCHEMA,
    createNew,
    findOneById
}
