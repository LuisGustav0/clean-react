import { ICalculate } from '@/main/usecases/interfaces'

export class CalculateArticleGreaterThan10Service implements ICalculate {

  calculate (article: number): number {
    // Caso precisa buscar no banco fica regra separada
    return article > 10 ? article * 2 : article;
  }
}
