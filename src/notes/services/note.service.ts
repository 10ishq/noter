import { INote, NoteModel } from "../schemas/note.schema";

class NoteService {
  async create(noteData: Partial<INote>): Promise<INote> {
    const note = new NoteModel(noteData);
    return note.save();
  }

  async getAll(): Promise<INote[]> {
    return NoteModel.find();
  }

  async getById(id: string): Promise<INote | null> {
    return NoteModel.findById(id);
  }

  async update(id: string, noteData: Partial<INote>): Promise<INote | null> {
    return NoteModel.findByIdAndUpdate(id, noteData, { new: true });
  }

  async delete(id: string): Promise<INote | null> {
    return NoteModel.findByIdAndDelete(id);
  }
}

export default new NoteService();
