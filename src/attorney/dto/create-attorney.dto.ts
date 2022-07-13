import { ApiProperty } from '@nestjs/swagger';

export class CreateAttorneyDto {
  @ApiProperty({ description: '변호사 이름' })
  name: string;

  @ApiProperty({ description: '사용자 UID' })
  userUid: string;
}
