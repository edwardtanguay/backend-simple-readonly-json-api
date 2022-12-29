import express from 'express';
import fs from 'fs';

const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
	const date = new Date();
	const logLine = `${date.toISOString()} - ${req.originalUrl}`;
	fs.appendFileSync('log.txt', logLine);
	next();
}

export default logger;