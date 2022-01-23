import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ForfaitModule } from './forfait/forfait.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [  MongooseModule.forRoot('mongodb://localhost:27017/test'),
  CatsModule,
  ForfaitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// https://github.com/nestjs/nest/tree/master/sample/06-mongoose/src
// https://www.youtube.com/watch?v=GQxaobVvZ9s
// https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-1/