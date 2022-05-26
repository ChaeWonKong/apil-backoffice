import { ApiProperty } from '@nestjs/swagger';
import { Refugee } from 'src/refugee/entities/refugee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Detension {
  @ApiProperty({ description: '구금 ID' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ApiProperty({ description: '구금 여부' })
  @OneToOne(() => Refugee)
  @JoinColumn()
  refugee: Refugee;

  @ApiProperty({ description: '구금 여부' })
  @Column()
  detained: boolean;

  @ApiProperty({ description: '구금된 보호소', required: false })
  @Column({ nullable: true })
  facility: string;

  @ApiProperty({ description: '구금사유', required: false })
  @Column({ type: 'longtext', nullable: true })
  reason: string;

  @ApiProperty({ description: '관련소송', required: false })
  @Column({ nullable: true })
  case: string;
}
