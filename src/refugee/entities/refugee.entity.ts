import { ApiProperty } from '@nestjs/swagger';
import { Attorney } from 'src/attorney/entities/attorney.entity';
import { Gender } from 'src/common/gender.enum';
import { RefugeeClaimStage } from 'src/common/refugee-claim-stage.enum';
import { Status } from 'src/common/status.enum';
import { VisitType } from 'src/common/visit-type.enum';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Form } from './form.entity';

@Entity()
export class Refugee {
  @ApiProperty({ description: '아이디' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ApiProperty({ description: '이름' })
  @Column()
  name: string;

  @ApiProperty({ description: '전화번호' })
  @Column()
  phone: string;

  @ApiProperty({ description: '생년월일' })
  @Column()
  dateOfBirth: Date;

  @ApiProperty({ description: '국적' })
  @Column()
  nationality: string;

  @ApiProperty({ description: 'email' })
  @Column()
  email: string;

  @ApiProperty({ description: '한국 도착 날짜' })
  @Column()
  arrivalDate: Date;

  @ApiProperty({ description: '체류형태', enum: VisitType })
  @Column()
  visitType: VisitType;

  @ApiProperty({ description: '가족이름' })
  @Column()
  familyName: string;

  @ApiProperty({ description: '본인 나라 언어 이름' })
  @Column()
  originalName: string;

  @ApiProperty({ description: '성별' })
  @Column()
  gender: Gender;

  @ApiProperty({ description: '주소' })
  @Column()
  address: string;

  @ApiProperty({ description: '외국인등록번호(여권번호)' })
  @Column()
  registrationNumber: string;

  @ApiProperty({ description: '한국이름' })
  @Column()
  koreanName: string;

  @ApiProperty({ description: '난민신청단계', enum: RefugeeClaimStage })
  @Column()
  claimStage: RefugeeClaimStage;

  @ApiProperty({ description: '진행상황', enum: Status })
  @Column()
  status: Status;

  @ApiProperty({ description: '담당변호사' })
  @ManyToOne(() => Attorney)
  attorneyInCharge: Attorney;

  @ApiProperty({ description: '어필에 처음 연락한 날짜' })
  @Column()
  initialContactDate: Date;

  @ApiProperty({ description: '생성일' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: '수정일' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: '삭제일' })
  @DeleteDateColumn()
  deletedAt: Date;

  @ApiProperty({ description: '인테이크 폼 응답 정보', type: () => Form })
  @OneToOne(() => Form, (form) => form.refugee)
  form: Form;
}
