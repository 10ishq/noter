import express from 'express';
import mongoose from 'mongoose';
import { json } from 'express';
import noteRoutes from './notes/routes/note.route';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

const app = express();

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware
app.use(json());

// Serve Swagger API documentation
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, '../swagger/notes.swagger.json'), 'utf8'));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api', noteRoutes);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
