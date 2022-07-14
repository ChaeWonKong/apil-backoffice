import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';
import { Reason } from '../enums/reason.enum';

export class CreateRefugeeManageDto {
  @ApiProperty({ description: '난민신청일' })
  @IsDateString()
  applyDate: Date;

  @ApiProperty({ description: '난민 거부 처분 결정 통지서' })
  @IsDateString()
  rejectedDate: Date;

  @ApiProperty({ description: '이의신청일' })
  @IsDateString()
  objectionDate: Date;

  @ApiProperty({ description: '난민신청 사유' })
  @IsString()
  reason: Reason | string;

  @ApiProperty({ description: '난민 거부 처분 결정 통지서' })
  @ApiProperty({ description: '난민신청단계별 결과' })
  @IsString()
  result: string;

  @ApiProperty({ description: '주요 키워드' })
  @IsString()
  keyword: string;

  @ApiProperty({ description: '사건번호' })
  @IsString()
  caseNumber: string;

  @ApiProperty({ description: '관할출입국' })
  @IsString()
  immigrationOffice: string;

  @ApiProperty({ description: '조력상황' })
  @IsString()
  aid: string;

  @ApiProperty({ description: '난민 인정 일자' })
  @IsDateString()
  acceptedDate: Date;
}
