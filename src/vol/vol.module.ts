import { Module } from '@nestjs/common';
import { VolController } from './vol.controller';
import { VolService } from './vol.service';

@Module({
  controllers: [VolController],
  providers: [VolService]
})
export class VolModule {}
