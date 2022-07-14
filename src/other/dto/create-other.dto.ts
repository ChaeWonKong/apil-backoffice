import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateOtherDto {
  @ApiProperty({ description: '난민 소송외 사건' })
  @IsString()
  @IsOptional()
  otherCase: string;

  @ApiProperty({ description: '소송구조' })
  @IsString()
  @IsOptional()
  caseDescription: string;

  @ApiProperty({ description: '계좌번호' })
  @IsString()
  @IsOptional()
  accountNumber: string;

  @ApiProperty({ description: '재정지원 기록' })
  @IsString()
  @IsOptional()
  financialAid: string;
}
