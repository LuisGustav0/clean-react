import { Candidate } from '@/main/usecases/model'
import { CalculateArticleService, CalculateCourseService, CalculateExperienceService } from '@/main/usecases'
import { ValidateAnyZeroActivityService } from '@/main/validate'

export class CandidateService {

  validateAnyZeroActivity: ValidateAnyZeroActivityService
  calculateExperienceService: CalculateExperienceService
  calculateCourseService: CalculateCourseService
  calculateArticleService: CalculateArticleService

  constructor (
    validateAnyZeroActivity: ValidateAnyZeroActivityService,
    calculateExperienceService: CalculateExperienceService,
    calculateCourseService: CalculateCourseService,
    calculateArticleService: CalculateArticleService) {

    this.validateAnyZeroActivity = validateAnyZeroActivity
    this.calculateExperienceService = calculateExperienceService
    this.calculateCourseService = calculateCourseService
    this.calculateArticleService = calculateArticleService
  }

  calculate (candidate: Candidate): number {
    if (this.validateAnyZeroActivity.valid(candidate)) return 0

    const {experience = 0, course = 0, article = 0} = candidate

    const totalExperience = this.calculateExperienceService.calculate(experience)
    const totalCourse = this.calculateCourseService.calculate(course)
    const totalArticle = this.calculateArticleService.calculate(article)

    return totalExperience + totalCourse + totalArticle
  }
}
