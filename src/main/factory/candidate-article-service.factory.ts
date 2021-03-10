import { CalculateArticleService } from '@/main/usecases'
import { makeCalculateArticleGreaterThan10Service } from '@/main/factory'

export const makeCalculateArticleService = (): CalculateArticleService => {
  const calculateArticleGreaterThan10Service = makeCalculateArticleGreaterThan10Service()
  return new CalculateArticleService(calculateArticleGreaterThan10Service)
}
