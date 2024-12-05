import { model, Schema, Types } from 'mongoose';

export interface IAnectode {
    _id: Types.ObjectId
    content : string;
    title : string;
}

const anecdoteSchema = new Schema<IAnectode>({
    content: { type: String, required: true },
    title: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

export default model<IAnectode>('Anectode', anecdoteSchema, 'anectodes');