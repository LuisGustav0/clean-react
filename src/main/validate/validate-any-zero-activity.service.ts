import { Candidate } from '@/main/usecases/model'
import { IValidator } from '@/main/validate/interfaces'

export class ValidateAnyZeroActivityService implements IValidator {

  valid (candidate: Candidate): boolean {
    const {experience = 0, course = 0, article = 0} = candidate

    return (experience === 0 || course === 0 || article === 0)
  }
}
