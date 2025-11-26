import { Module } from '@nestjs/common';
import { CenotesController } from './cenotes.controller';
import { CenotesService } from './cenotes.service';

@Module({
  controllers: [CenotesController],
  providers: [CenotesService],
})
export class CenotesModule {}
