const {createLogger, transports, format} = require('winston');

// create the logger
const logger = createLogger({
    level: 'info', // this will log only messages with the level info and above
    format: format.combine(
        format.timestamp(),
        format.printf(({timestamp, level, message}) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'app.log'})
    ]
})

// using the logger
logger.info("This is an info message");
logger.error("This is an error message");
logger.warn("This is a warning message");

// handling uncaught exceptions
process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception', error);
    process.exit(1);
})