"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_service_1 = __importDefault(require("../services/note.service"));
class NoteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield note_service_1.default.create(req.body);
                res.status(201).json(note);
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield note_service_1.default.getAll();
                res.status(200).json(notes);
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield note_service_1.default.getById(req.params.id);
                if (note) {
                    res.status(200).json(note);
                }
                else {
                    res.status(404).json({ message: 'Note not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield note_service_1.default.update(req.params.id, req.body);
                if (note) {
                    res.status(200).json(note);
                }
                else {
                    res.status(404).json({ message: 'Note not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield note_service_1.default.delete(req.params.id);
                if (note) {
                    res.status(200).json({ message: 'Note deleted' });
                }
                else {
                    res.status(404).json({ message: 'Note not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
}
exports.default = new NoteController();
