import { CalculateExperienceService } from '@/main/usecases'

export const makeCalculateExperienceService = (): CalculateExperienceService =>
  new CalculateExperienceService()
