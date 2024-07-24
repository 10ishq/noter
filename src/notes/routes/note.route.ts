import { Router } from 'express';
import authMiddleware from 'utils/middlewares/auth.middleware';
import NoteController from 'notes/controllers/note.controller';


const router = Router();

router.post('/notes', authMiddleware, NoteController.create);
router.get('/notes', authMiddleware, NoteController.getAll);
router.get('/notes/:id', authMiddleware, NoteController.getById);
router.put('/notes/:id', authMiddleware, NoteController.update);
router.delete('/notes/:id', authMiddleware, NoteController.delete);

export default router;
