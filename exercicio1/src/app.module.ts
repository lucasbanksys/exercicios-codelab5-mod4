import { Module } from '@nestjs/common';
import { SomaModule } from './soma/soma.module';

@Module({
  imports: [SomaModule],
})
export class AppModule {}
