import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { Role } from '../enums/role.enum';

export class UpdateUserRoleDto {
  @ApiProperty({ description: 'role', enum: Role })
  @IsEnum(Role)
  role: Role;
}
