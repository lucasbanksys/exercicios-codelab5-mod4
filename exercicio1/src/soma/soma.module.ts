import { Module } from '@nestjs/common';
import { SomaService } from './soma.service';
import { SomaController } from './soma.controller';

@Module({
  providers: [SomaService],
  controllers: [SomaController],
})
export class SomaModule {}
