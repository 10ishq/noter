import { Schema, model } from 'mongoose';
import { INote } from 'notes/dtos/note/note.dto';



const NoteSchema = new Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userID: { type: String, required: true },
}, { timestamps: true });

const NoteModel = model<INote>('Note', NoteSchema);

export { NoteModel };
