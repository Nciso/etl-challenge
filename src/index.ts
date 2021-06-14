import express from 'express';
import { v1Router } from './core/v1'
import { authMiddlewere } from "./auth";
const app = express();
const port = 8080;

app.use('/api/v1', authMiddlewere, v1Router)

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});