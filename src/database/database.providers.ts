import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect('mongodb://dbUser:dbPassword@192.168.99.100/admin'),
    },
];
