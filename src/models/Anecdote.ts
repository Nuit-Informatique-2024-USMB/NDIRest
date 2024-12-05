import { model, Schema, Types } from 'mongoose';

export interface IAnecdote {
    _id: Types.ObjectId
    content : string;
    title : string;
}

const anecdoteSchema = new Schema<IAnecdote>({
    content: { type: String, required: true },
    title: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

export default model<IAnecdote>('Anectode', anecdoteSchema, 'anecdotes');