import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from '../enums/role.enum';
import { UserType } from '../enums/user-type.enum';

export class CreateUserDto {
  @ApiProperty({ description: '사용자 이름' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Firebase UID' })
  @IsString()
  uid: string;

  @ApiProperty({ description: '전화번호' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ description: '전화번호' })
  @IsString()
  email: string;

  @ApiProperty({ description: '사용자 분류' })
  type?: UserType | string;

  @ApiProperty({ description: '사용자 권한', enum: Role })
  @IsEnum(Role)
  role: Role;
}
