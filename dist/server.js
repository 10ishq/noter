"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV}`;
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '..', envFile) });
const app_1 = __importDefault(require("./app")); // Import the app setup from a separate file
const PORT = process.env.PORT || 3000;
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('MONGO_URI', process.env.MONGO_URI);
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
