class ApiError extends Error {
    constructor (statusCode, message) {
        super(message)

        //Tên của CustomError nếu không set thì mặc định sẽ kế thừa là 'Error'
        this.name = 'ApiError'

        //Gắn thêm http status code của chúng ta vào đây
        this.statusCode = statusCode

        //Ghi lại Stack Trace (dấu vết ngăn xếp) để thuận tiện cho việc debug
        Error.captureStackTrace(this, this.constructor)
    }
}

export default ApiError