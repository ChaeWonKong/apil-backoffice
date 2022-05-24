import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attorney {
  @ApiProperty({ description: '변호사 ID' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ApiProperty({ description: '변호사 이름' })
  @Column()
  name: string;
}
