import { CalculateArticleGreaterThan10Service } from '@/main/usecases'

export const makeCalculateArticleGreaterThan10Service = (): CalculateArticleGreaterThan10Service => {
  return new CalculateArticleGreaterThan10Service()
}
