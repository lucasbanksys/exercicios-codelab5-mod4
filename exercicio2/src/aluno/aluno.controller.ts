import { Body, Controller, Post } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoDto } from './dto/aluno.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private alunoService: AlunoService) {}

  @Post()
  calculoMedia(@Body() data: AlunoDto) {
    return this.alunoService.calcularMedia(data);
  }
}
