import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ description: '난민 ID' })
  @IsString()
  refugeeId: string;

  @ApiProperty({ description: '코멘트를 작성하는 사용자 이름' })
  @IsString()
  name: string;

  @ApiProperty({ description: '코멘트 작성자 이메일' })
  @IsString()
  email: string;

  @ApiProperty({ description: '코멘트 제목' })
  @IsString()
  title: string;

  @ApiProperty({ description: '코멘트 본문' })
  @IsString()
  text: string;

  @ApiProperty({ description: '생성/수정일' })
  @IsDateString()
  updatedAt: Date;
}
