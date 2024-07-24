"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModel = void 0;
const mongoose_1 = require("mongoose");
const NoteSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    userID: { type: String, required: true },
}, { timestamps: true });
const NoteModel = (0, mongoose_1.model)('Note', NoteSchema);
exports.NoteModel = NoteModel;
