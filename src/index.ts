import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env['PORT'] || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});
