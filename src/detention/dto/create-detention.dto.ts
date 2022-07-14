import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateDetentionDto {
  @ApiProperty({ description: '구금여부' })
  @IsBoolean()
  isDetained: boolean;

  @ApiProperty({ description: '구금된 보호소' })
  @IsString()
  detainedFacility: string;

  @ApiProperty({ description: '구금 사유' })
  @IsString()
  reason: string;

  @ApiProperty({ description: '관련소송' })
  @IsString()
  relatedCase: string;
}
