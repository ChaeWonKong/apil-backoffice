import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ description: 'id: number' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '사용자는 알 수 없는 firebase 내 관리용 UID' })
  @Column()
  firebaseUid: string;

  @ApiProperty({ description: '사용자의 google id' })
  @Column()
  googleId: string;
}
