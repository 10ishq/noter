import express from 'express';
import mongoose from 'mongoose';
import { json } from 'express';
import noteRoutes from './notes/routes/note.route';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware
app.use(json());

// Routes
app.use('/api', noteRoutes);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
