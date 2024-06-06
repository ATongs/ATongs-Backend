const Boom = require('@hapi/boom');

class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }

    static handle(err) {
        if (err instanceof CustomError) {
            return Boom.boomify(err, { statusCode: err.statusCode });
        }
        return Boom.internal(err.message, err);
    }
}

module.exports = CustomError;
