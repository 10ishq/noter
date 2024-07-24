"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../../utils/middlewares/auth.middleware"));
const note_controller_1 = __importDefault(require("../controllers/note.controller"));
const router = (0, express_1.Router)();
router.post('/notes', auth_middleware_1.default, note_controller_1.default.create);
router.get('/notes', auth_middleware_1.default, note_controller_1.default.getAll);
router.get('/notes/:id', auth_middleware_1.default, note_controller_1.default.getById);
router.put('/notes/:id', auth_middleware_1.default, note_controller_1.default.update);
router.delete('/notes/:id', auth_middleware_1.default, note_controller_1.default.delete);
exports.default = router;
