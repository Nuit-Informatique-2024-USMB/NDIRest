import { model, Schema, Types } from 'mongoose';

export interface IOcean {
    _id: Types.ObjectId
    name: string;
    position: {
        latitude: number;
        longitude: number;
    };
    info: string;
    QCM: {
        title: string;
        questions: string[];
        answers: string[];
        correctAnswerIndex: number;
    }[];
    anecdotes: {
        title: string,
        subtitle?: string,
        description: string,
        sources: string[],
    }[];
}

const oceanSchema = new Schema<IOcean>({
    name: { type: String, required: true },
    position: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
    info: { type: String, required: true },
    QCM: [{
        title: { type: String, required: true },
        questions: [{ type: String, required: true }],
        answers: [{ type: String, required: true }],
        correctAnswerIndex: { type: Number, required: true },
    }],
    anecdotes: [{
        title: { type: String, required: true },
        subtitle: { type: String },
        description: { type: String, required: true },
        sources: [{ type: String, required: true }],
    }],
}, {
    versionKey: false,
    timestamps: true,
});

export default model<IOcean>('Ocean', oceanSchema, 'oceans');