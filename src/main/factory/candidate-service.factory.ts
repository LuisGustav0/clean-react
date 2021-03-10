import { CandidateService } from '@/main/usecases'

import { makeValidateAnyZeroActivityService } from '@/main/factory'
import { makeCalculateArticleService } from '@/main/factory'
import { makeCalculateExperienceService } from '@/main/factory/candidate-experience-service.factory'
import { makeCalculateCourseService } from '@/main/factory/candidate-course-service.factory'

export const makeCandidateService = (): CandidateService => {
  const validateAnyZeroActivityService = makeValidateAnyZeroActivityService()
  const calculateExperienceService = makeCalculateExperienceService()
  const calculateCourseService = makeCalculateCourseService()
  const calculateArticleService = makeCalculateArticleService()

  return new CandidateService(
    validateAnyZeroActivityService,
    calculateExperienceService,
    calculateCourseService,
    calculateArticleService
  )
}
