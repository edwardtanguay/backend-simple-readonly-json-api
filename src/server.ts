import * as model from './model.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3609;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('<h1>Book Site API</h1>');
});

app.get('/books', (req: express.Request, res: express.Response) => {
	res.json(model.getBooks());
});

app.listen(PORT, () => {
	console.log(`listening on port http://localhost:${PORT}`);
});