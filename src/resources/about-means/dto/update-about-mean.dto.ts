import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutMeanDto } from './create-about-mean.dto';

export class UpdateAboutMeanDto extends PartialType(CreateAboutMeanDto) {}
