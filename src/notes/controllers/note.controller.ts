import { Request, Response } from 'express';
import NoteService from '../services/note.service';

class NoteController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const note = await NoteService.create(req.body);
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const notes = await NoteService.getAll();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const note = await NoteService.getById(req.params.id);
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const note = await NoteService.update(req.params.id, req.body);
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const note = await NoteService.delete(req.params.id);
      if (note) {
        res.status(200).json({ message: 'Note deleted' });
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new NoteController();
