import { Controller } from '@nestjs/common';
import { SomaService } from './soma.service';
import { Post, Body } from '@nestjs/common';
import { NumerosDto } from './dto/numeros.dto';

@Controller('soma')
export class SomaController {
  constructor(private somaService: SomaService) {}

  @Post()
  somar(@Body() data: NumerosDto) {
    return this.somaService.somar(data);
  }
}
