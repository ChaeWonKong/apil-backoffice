import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GoogleCallbackDto {
  @ApiProperty({ description: '사용자가 지정한 이름' })
  @IsString()
  name: string;
}
