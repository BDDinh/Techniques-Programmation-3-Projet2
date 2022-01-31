import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

/*
ValidationPipe
https://dzone.com/articles/using-the-in-built-nestjs-validationpipe
https://www.merixstudio.com/blog/validated-rest-api-nestjs/
https://progressivecoder.com/how-to-use-inbuilt-nestjs-validationpipe/

https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe
*/