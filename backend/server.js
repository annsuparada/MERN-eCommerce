import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send(`API is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

app.use('/api/products', productRoutes);

app.listen(5000, console.log(`Server running on port ${PORT}`));
