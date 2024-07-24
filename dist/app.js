"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_2 = require("express");
const note_route_1 = __importDefault(require("./notes/routes/note.route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Connect to MongoDB using environment variable
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
// Middleware
app.use((0, express_2.json)());
// Serve Swagger API documentation
const swaggerDocument = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../swagger/notes.swagger.json'), 'utf8'));
app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Routes
app.use('/api', note_route_1.default);
// Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});
exports.default = app;
