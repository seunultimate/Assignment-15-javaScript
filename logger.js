//morgan_Http logger
//morgan setup
const morgan = require ('morgan');
app.use(morgan('dev'))


//winston_Application logger
//winston setup
const winston = require("wiston");
app.use = winston.createLogger({
    level: 'info',
    transports: [
        new wiston.transports.Console(),
        new wiston.transports.File({
            flename: 'app.log'
        })
    ]
})
module.exports = winston

//usage
logger.info('User logged in successfully');
logger.warn('password incorrect');
logger.error('Database connection failed');