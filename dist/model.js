import fs from 'fs';
const rawBooks = JSON.parse(fs.readFileSync('./src/data/rawBooks.json', 'utf8'));
const books = rawBooks.map(rawBook => {
    return {
        id: rawBook.id,
        idCode: rawBook.idCode,
        title: rawBook.title,
        description: rawBook.description,
        language: rawBook.language === '' ? 'english' : rawBook.language
    };
});
export const getBooks = () => {
    return books;
};
//# sourceMappingURL=model.js.map