import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';
import { Reason } from '../enums/reason.enum';

export class CreateRefugeeManageDto {
  @ApiProperty({ description: '난민신청일', required: false })
  @IsOptional()
  @IsDateString()
  applyDate: Date;

  @ApiProperty({ description: '난민 거부 처분 결정 통지서', required: false })
  @IsOptional()
  @IsDateString()
  rejectedDate: Date;

  @ApiProperty({ description: '이의신청일', required: false })
  @IsOptional()
  @IsDateString()
  objectionDate: Date;

  @ApiProperty({ description: '난민신청 사유', required: false })
  @IsOptional()
  @IsString()
  reason: Reason | string;

  @ApiProperty({ description: '난민 거부 처분 결정 통지서', required: false })
  @IsOptional()
  @ApiProperty({ description: '난민신청단계별 결과' })
  @IsString()
  result: string;

  @ApiProperty({ description: '주요 키워드', required: false })
  @IsOptional()
  @IsString()
  keyword: string;

  @ApiProperty({ description: '사건번호', required: false })
  @IsOptional()
  @IsString()
  caseNumber: string;

  @ApiProperty({ description: '관할출입국', required: false })
  @IsOptional()
  @IsString()
  immigrationOffice: string;

  @ApiProperty({ description: '조력상황', required: false })
  @IsOptional()
  @IsString()
  aid: string;

  @ApiProperty({ description: '난민 인정 일자', required: false })
  @IsOptional()
  @IsDateString()
  acceptedDate: Date;
}
