class errorHandler extends Error {
    constructor(message, ) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }

};

module.exports = errorHandler;