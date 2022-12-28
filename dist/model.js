import fs from 'fs';
const rawBooks = JSON.parse(fs.readFileSync('./src/data/rawBooks.json', 'utf8'));
const books = rawBooks.map(rawBook => {
    return {
        title: rawBook.title
    };
});
export const getBooks = () => {
    return books;
};
//# sourceMappingURL=model.js.map