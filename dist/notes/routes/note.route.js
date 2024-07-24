"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../../utils/middlewares/auth.middleware"));
const note_controller_1 = __importDefault(require("../controllers/note.controller"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Meeting Notes"
 *               content:
 *                 type: string
 *                 example: "Discussed the project milestones and deadlines."
 *               userID:
 *                 type: string
 *                 example: "60c72b2f4f1a2c001c8a8a8b"
 *     responses:
 *       201:
 *         description: Note created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Meeting Notes"
 *                 content:
 *                   type: string
 *                   example: "Discussed the project milestones and deadlines."
 *                 userID:
 *                   type: string
 *                   example: "60c72b2f4f1a2c001c8a8a8b"
 *                 _id:
 *                   type: string
 *                   example: "66a0736508b5988c57ac9e9c"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-24T03:22:13.579Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-24T03:22:13.579Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       500:
 *         description: Server error
 */
router.post('/notes', auth_middleware_1.default, note_controller_1.default.create);
/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Get all notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: List of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: "Meeting Notes"
 *                   content:
 *                     type: string
 *                     example: "Discussed the project milestones and deadlines."
 *                   userID:
 *                     type: string
 *                     example: "60c72b2f4f1a2c001c8a8a8b"
 *                   _id:
 *                     type: string
 *                     example: "66a0736508b5988c57ac9e9c"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-24T03:22:13.579Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-24T03:22:13.579Z"
 *                   __v:
 *                     type: integer
 *                     example: 0
 *       500:
 *         description: Server error
 */
router.get('/notes', auth_middleware_1.default, note_controller_1.default.getAll);
/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Get a note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Note ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Meeting Notes"
 *                 content:
 *                   type: string
 *                   example: "Discussed the project milestones and deadlines."
 *                 userID:
 *                   type: string
 *                   example: "60c72b2f4f1a2c001c8a8a8b"
 *                 _id:
 *                   type: string
 *                   example: "66a0736508b5988c57ac9e9c"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-24T03:22:13.579Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-24T03:22:13.579Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       404:
 *         description: Note not found
 *       500:
 *         description: Server error
 */
router.get('/notes/:id', auth_middleware_1.default, note_controller_1.default.getById);
/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Update a note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Note ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Meeting Notes"
 *               content:
 *                 type: string
 *                 example: "Updated content."
 *               userID:
 *                 type: string
 *                 example: "60c72b2f4f1a2c001c8a8a8b"
 *     responses:
 *       200:
 *         description: Note updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Updated Meeting Notes"
 *                 content:
 *                   type: string
 *                   example: "Updated content."
 *                 userID:
 *                   type: string
 *                   example: "60c72b2f4f1a2c001c8a8a8b"
 *                 _id:
 *                   type: string
 *                   example: "66a0736508b5988c57ac9e9c"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-24T03:22:13.579Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-24T03:22:13.579Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       404:
 *         description: Note not found
 *       500:
 *         description: Server error
 */
router.put('/notes/:id', auth_middleware_1.default, note_controller_1.default.update);
/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Note ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       404:
 *         description: Note not found
 *       500:
 *         description: Server error
 */
router.delete('/notes/:id', auth_middleware_1.default, note_controller_1.default.delete);
exports.default = router;
