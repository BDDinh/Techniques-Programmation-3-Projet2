import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolController } from './vol.controller';
import { Vol, VolSchema } from './schemas/vol.schema';
import { VolService } from './vol.service';
import { LoadVolsInMongoDb } from './load-data-in-mongo-dbservice.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Vol.name, schema: VolSchema }])],
  controllers: [VolController],
  providers: [VolService, LoadVolsInMongoDb],
  exports: [LoadVolsInMongoDb]
})
export class VolModule {}
