import fs from 'fs';
const logger = (req, res, next) => {
    const date = new Date();
    const logLine = `${date.toISOString()} - ${req.originalUrl}`;
    fs.appendFileSync('log.txt', logLine);
    next();
};
export default logger;
//# sourceMappingURL=logger.js.map