import { Connection } from 'mongoose';
import { ImageSchema } from './image.schema';

export const ImageProviders = [
    {
        provide: 'IMAGE_MODEL',
        useFactory: (connection: Connection) => connection.model('Image', ImageSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
