import { model, Schema, Types } from 'mongoose';

export interface ITest {
    _id: Types.ObjectId
    name: string;
}

const testSchema = new Schema<ITest>({
    name: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

export default model<ITest>('Test', testSchema, 'tests');
