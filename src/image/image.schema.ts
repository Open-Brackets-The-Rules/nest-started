import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
    name: String,
    description: String,
    filename: String,
});
