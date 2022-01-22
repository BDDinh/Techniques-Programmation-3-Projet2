import { Module } from '@nestjs/common';
import { ForfaitService } from './forfait.service';
import { ForfaitController } from './forfait.controller';

@Module({
  controllers: [ForfaitController],
  providers: [ForfaitService]
})
export class ForfaitModule {}

// https://docs.nestjs.com/techniques/mongodb#async-configuration