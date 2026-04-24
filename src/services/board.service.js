    import { slugify } from '../utils/formatters.js'
    import { boardModel } from '../models/board.model.js'

    const createNew = async (data) => {
        try {
        const newBoard = {
            ...data,
            slug: slugify(data.title)
        }
        
        //Gọi tới tầng Model để xử lý lưu bản ghi mới vào trong Database
        const createdBoard = await boardModel.createNew(newBoard)

        return createdBoard
        } catch (error) {
            throw error
        }
    }

    export const boardService = {
        createNew
    }