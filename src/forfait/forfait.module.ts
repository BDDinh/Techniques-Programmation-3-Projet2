import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ForfaitService } from './forfait.service';
import { ForfaitController } from './forfait.controller';
import { Forfait, ForfaitSchema } from './schemas/forfait.schema';
import { LoadDataInMongoDbservice} from './load-data-in-mongo-dbservice.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Forfait.name, schema: ForfaitSchema }])],
  controllers: [ForfaitController],
  providers: [ForfaitService, LoadDataInMongoDbservice]
})
export class ForfaitModule {}

// https://docs.nestjs.com/techniques/mongodb#async-configuration