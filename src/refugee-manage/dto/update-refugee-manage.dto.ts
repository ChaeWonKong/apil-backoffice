import { PartialType } from '@nestjs/swagger';
import { CreateRefugeeManageDto } from './create-refugee-manage.dto';

export class UpdateRefugeeManageDto extends PartialType(CreateRefugeeManageDto) {}
