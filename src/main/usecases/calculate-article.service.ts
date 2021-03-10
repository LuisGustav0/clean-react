import { CalculateArticleGreaterThan10Service } from '@/main/usecases'
import { ICalculate } from '@/main/usecases/interfaces'

export class CalculateArticleService implements ICalculate {

  calculateArticleGreaterThan10: CalculateArticleGreaterThan10Service

  constructor (calculateArticleGreaterThan10: CalculateArticleGreaterThan10Service) {
    this.calculateArticleGreaterThan10 = calculateArticleGreaterThan10
  }

  calculate (article: number): number {
    return this.calculateArticleGreaterThan10.calculate(article)
  }
}
