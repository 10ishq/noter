"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_2 = require("express");
const note_route_1 = __importDefault(require("./notes/routes/note.route"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
// Middleware
app.use((0, express_2.json)());
// Routes
app.use('/api', note_route_1.default);
// Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});
exports.default = app;
