import { Module } from '@nestjs/common';
import { VolController } from './vol.controller';
import { VolService } from './vol.service';
import { LoadVolsInMongoDb } from './load-data-in-mongo-dbservice.service';

@Module({
  controllers: [VolController],
  providers: [VolService, LoadVolsInMongoDb],
  exports: [LoadVolsInMongoDb]
})
export class VolModule {}
