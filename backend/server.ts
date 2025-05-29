import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middlewares/errorMiddleware';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors({ origin: ['http://localhost:5173'] }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
