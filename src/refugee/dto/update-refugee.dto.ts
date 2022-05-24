import { PartialType } from '@nestjs/swagger';
import { CreateRefugeeDto } from './create-refugee.dto';

export class UpdateRefugeeDto extends PartialType(CreateRefugeeDto) {}
