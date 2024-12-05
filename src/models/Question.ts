import { model, Schema, Types } from 'mongoose';

export interface IQuestion {
    _id: Types.ObjectId
    title : string;
    answers : string[];
    goodAnswer : number;
}

const questionSchema = new Schema<IQuestion>({
    title: { type: String, required: true },
    answers: { type: [String], required: true },
    goodAnswer: { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

export default model<IQuestion>('Question', questionSchema, 'questions');