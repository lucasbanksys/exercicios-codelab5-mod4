import { Injectable } from '@nestjs/common';
import { NumerosDto } from './dto/numeros.dto';

@Injectable()
export class SomaService {
  somar(data: NumerosDto) {
    const soma = data.numero1 + data.numero2;

    return soma;
  }
}
