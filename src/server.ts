import dotenv from 'dotenv';
import path from 'path';

// Load environment variables based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV }`;
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

import app from './app'; // Import the app setup from a separate file

const PORT = process.env.PORT || 3000;

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('MONGO_URI', process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
