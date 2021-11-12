import { Injectable } from '@nestjs/common';
import { AlunoDto } from './dto/aluno.dto';

@Injectable()
export class AlunoService {
  calcularMedia(data: AlunoDto) {
    const media = (data.nota1 + data.nota2 + data.nota3 + data.nota4) / 4;

    if (+media > 7) {
      var resultado = 'Aprovado(a)';
    } else {
      var resultado = 'Reprovado(a)';
    }

    return (
      'O(A) aluno(a) ' +
      data.nome +
      ' nascido(a) em ' +
      data.dia_nascimento +
      '/' +
      data.mes_nascimento +
      '/' +
      data.ano_nascimento +
      ' atingiu a média de: ' +
      media +
      ' e portanto foi considerado(a): ' +
      resultado +
      '.'
    );
  }
}
