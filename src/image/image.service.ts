import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Image } from './image.interface';
import { CreateImageDTO } from './create-image.dto';

@Injectable()
export class ImageService {
    constructor(
        @Inject('IMAGE_MODEL')
        private readonly ImageModel: Model<Image>,
    ) {}

    async create(createImageDTO: CreateImageDTO): Promise<Image> {
        const createImage = new this.ImageModel(createImageDTO);
        return await createImage.save();
    }

    async findAll(): Promise<Image[]> {
        return await this.ImageModel.find().exec();
    }
}
