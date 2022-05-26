import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({ description: '사용자는 알 수 없는 firebase 내 관리용 UID' })
  @IsString()
  firebaseUid: string;

  @ApiProperty({ description: '사용자의 google id' })
  @IsString()
  googleId: string;
}
