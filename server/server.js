import express from 'express';
import path from 'path';

const app = express();
const PORT = 3003;

// Указываем Express обслуживать статические файлы из директории dist
app.use(express.static(path.join(process.cwd(), 'dist')));

// Обработка GET-запроса на корень
app.get('/', (_, res) => {
    res.sendFile(path.join(process.cwd(), 'dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
