import { PartialType } from '@nestjs/swagger';
import { CreateDetentionDto } from './create-detention.dto';

export class UpdateDetentionDto extends PartialType(CreateDetentionDto) {}
