// const candidato = { xp: 1, curso: 1, artigo: 1 };
// PESOS: XP = 5, Curso = 2, Artigo = 1 -> 8 pts

// retorna a nota de um candidato baseado no peso
// retorna a nota de um candidato que tem mais de 10 artigos
// retorna a nota de um candidato que tem uma atividade ZERO
// retorna os candidatos ordenados por nota decrescente

import { Candidate } from '@/main/usecases/model'
import { makeCandidateService } from '@/main/factory'

describe('CalcularCandidateService', () => {

  let candidateService = makeCandidateService()

  test('Should return `10` When calculate candidate based on weight', () => {
    const candidate = new Candidate(1, 2, 1)

    const result = candidateService.calculate(candidate)

    expect(result).toBe(10)
  });

  test('Should return `31` When calculate candidate based 11 article', () => {
    const candidate = new Candidate(1, 2, 11)

    const result = candidateService.calculate(candidate)

    expect(result).toBe(31)
  });

  test('Should return `0` When any ZERO activity', () => {
    const candidate = new Candidate(1, 0, 11)

    const result = candidateService.calculate(candidate)

    expect(result).toBe(0)
  });
});
