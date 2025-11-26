import { Module } from '@nestjs/common';
import { CenotesModule } from './cenotes/cenotes.module';

@Module({
  imports: [CenotesModule],
})
export class AppModule {}
