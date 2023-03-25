import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluationUgDto } from './create-evaluation-ug.dto';

export class UpdateEvaluationUgDto extends PartialType(CreateEvaluationUgDto) {}
