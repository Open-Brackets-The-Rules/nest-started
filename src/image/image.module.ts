import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { DatabaseModule } from '../database/database.module';
import { ImageService } from './image.service';
import { ImageProviders } from './image.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [ImageController],
    providers: [ImageService, ...ImageProviders],
})
export class ImageModule {}
