import { CalculateCourseService } from '@/main/usecases'

export const makeCalculateCourseService = (): CalculateCourseService =>
  new CalculateCourseService()
