import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDTO } from './create-image.dto';

@Controller('image')
export class ImageController {
    constructor(private imageService: ImageService) {}

    @Post('create')
    async create(@Body() createIm: CreateImageDTO) {
        return this.imageService.create(createIm);
    }

    @Get()
    async findAll() {
        return this.imageService.findAll();
    }
}
