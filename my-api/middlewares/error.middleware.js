const AppError = require('../utils/AppError');

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        success:false,
        message: err.message || "Internal Server Error", 
        statusCode: err.statusCode
    })
}
module.exports = errorHandler;