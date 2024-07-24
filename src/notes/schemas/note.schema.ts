import { Schema, model } from 'mongoose';

interface INote {
  title: string;
  content: string;
  userID: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const NoteSchema = new Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userID: { type: String, required: true },
}, { timestamps: true });

const NoteModel = model<INote>('Note', NoteSchema);

export { NoteModel, INote };
