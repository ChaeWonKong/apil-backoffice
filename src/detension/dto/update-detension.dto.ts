import { PartialType } from '@nestjs/swagger';
import { CreateDetensionDto } from './create-detension.dto';

export class UpdateDetensionDto extends PartialType(CreateDetensionDto) {}
