import { Document } from 'mongoose';

export interface Image extends Document {
    readonly name: string;
    readonly description: string;
    readonly filename: string;
}
