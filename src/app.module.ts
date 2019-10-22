import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';
import { DatabaseModule } from './database/database.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, DatabaseModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
