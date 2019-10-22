import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ImageModule } from '../src/image/image.module';
import { ImageService } from '../src/image/image.service';
import { INestApplication } from '@nestjs/common';

describe('Images', () => {
  let app: INestApplication;
  const imageService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ImageModule],
    })
      .overrideProvider(ImageService)
      .useValue(imageService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET images`, () => {
    return request(app.getHttpServer())
      .get('/image')
      .expect(200)
      .expect(
        imageService.findAll(),
      );
  });

  afterAll(async () => {
    await app.close();
  });
});
