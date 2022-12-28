import * as model from './model.js';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
const PORT = 3609;
app.get('/', (req, res) => {
    res.send('<h1>Book Site API</h1>');
});
app.get('/books', (req, res) => {
    res.json(model.getBooks());
});
app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map