import { PartialType } from '@nestjs/swagger';
import { CreateRefugeeDto } from './create-refugee.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { RefugeeClaimStage } from 'src/common/refugee-claim-stage.enum';
import { Gender } from 'src/common/gender.enum';
import { VisitType } from 'src/common/visit-type.enum';
import { Status } from 'src/common/status.enum';

export class FilterRefugeeDto {
  @ApiProperty({ description: '난민 이름', required: false })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ description: '국적', required: false })
  @IsString()
  @IsOptional()
  nationality: string;

  @ApiProperty({ description: '방문목적', required: false })
  @IsString()
  @IsOptional()
  visitType: VisitType;

  @ApiProperty({ description: '성', required: false })
  @IsString()
  @IsOptional()
  familyName: string;

  @ApiProperty({ description: '전체이름', required: false })
  @IsString()
  @IsOptional()
  fullName: string;

  @ApiProperty({ description: '성별', required: false })
  @IsString()
  @IsOptional()
  gender: Gender;

  @ApiProperty({ description: '한국말이름', required: false })
  @IsString()
  @IsOptional()
  koreanName: string;

  @ApiProperty({ description: '난민신청단계', required: false })
  @IsString()
  @IsOptional()
  claimStage: RefugeeClaimStage;

  @ApiProperty({ description: '현재상황', required: false })
  @IsString()
  @IsOptional()
  status: Status;

  @ApiProperty({ description: '담당크루', required: false })
  @IsString()
  @IsOptional()
  attorney: string;
}
