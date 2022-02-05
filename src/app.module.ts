import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ForfaitModule } from './forfait/forfait.module';
import { VolModule } from './vol/vol.module';

@Module({
  imports: [  MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ForfaitModule,
  VolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// https://github.com/nestjs/nest/tree/master/sample/06-mongoose/src
// https://www.youtube.com/watch?v=GQxaobVvZ9s
// https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-1/
// https://www.singlestoneconsulting.com/blog/nestjs-the-hero-we-didnt-know-we-needed/
// https://javascript.plainenglish.io/10-things-every-nest-js-developer-should-know-911dec32f66a