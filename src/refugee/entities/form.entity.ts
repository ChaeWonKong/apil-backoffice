import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Refugee } from './refugee.entity';

@Entity()
export class Form {
  @ApiProperty({ description: 'form id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ApiProperty({ description: '난민 정보' })
  @OneToOne(() => Refugee, (refugee) => refugee.form)
  refugee: Refugee;

  @ApiProperty({ description: '생성일' })
  @Column()
  createdAt: Date;

  @ApiProperty({ description: '출신국을 떠난 이유가 무엇입니까?' })
  @Column({ type: 'longtext' })
  purposeOfLeaving: string;

  @ApiProperty({ description: '난민신청을 하는 이유가 무엇입니까?' })
  @Column({ type: 'longtext' })
  purposeOfRefugeeApplication: string;

  //난민신청 사유와 관련하여 과거에 귀하의 국가에서 겪은 어려움에 대해서 적어 주세요.
  @ApiProperty({
    description:
      '난민신청 사유와 관련하여 과거에 귀하의 국가에서 겪은 어려움에 대해서 적어 주세요.',
  })
  @Column({ type: 'longtext' })
  difficulties: string;

  @ApiProperty({
    description:
      '본국으로 돌아가면 본인의 신변 관련 가장 걱정되는 점이 무엇입니깐?',
  })
  @Column({ type: 'longtext' })
  majorConcernWhenGoBack: string;

  @ApiProperty({
    description: '박해 위험을 증명할 수 있는 문서나 사진을 제출해 주세요',
  })
  @Column()
  proofSourceUrl: string;

  @ApiProperty({
    description:
      '난민신청 관련하여 본인이 나온 기사 및 동영상 URL주소를 입력해 주세요',
  })
  @Column()
  mediaUrl: string;

  @ApiProperty({ description: '' })
  @Column({ type: 'longtext' })
  firstApplied: boolean;

  @ApiProperty({ description: '' })
  @Column()
  dateOfApplication: Date;

  @ApiProperty({ description: '난민 거부 처분 결정 통지서 받은 날짜' })
  @Column()
  refusalNoticeReceiveDate: Date;

  @ApiProperty({ description: '난민신청서' })
  @Column()
  applicationUrl: string;

  @ApiProperty({ description: '난민불인정결정 통지서' })
  @Column()
  rejectionNoticeUrl: string;

  @ApiProperty({ description: '난민불인정 사유서' })
  @Column()
  rejectionReasonUrl: string;

  @ApiProperty({ description: '난민면접조서 전체' })
  @Column()
  interviewUrl: string;

  @ApiProperty({ description: '법무부에 제출한 이의신청 접수증' })
  @Column()
  objectionUrl: string;

  @ApiProperty({
    description:
      '이의신청 기각 결정 통지서를 출입국관리사무소에 가서 실제 받은 날짜는 언제입니까?',
  })
  @Column()
  dismissalReceiveDate: Date;

  @ApiProperty({ description: '이의신청 기각 결정 통지서를 업로드 해주세요' })
  @Column()
  dismissalUrl: Date;

  @ApiProperty({
    description:
      '법원에 소를 제기하였습니까? 소를 제기하였다면 현재 몇 심 단계에 있습니까?',
  })
  @Column()
  isCaseCreated: string;

  @ApiProperty({
    description: '사건번호가 적혀 있는 1심 법원 서류 제출',
  })
  @Column()
  courtDocumentUrl: string;

  @ApiProperty({
    description: '1심 법원 판결문',
  })
  @Column()
  firstCourtJudgementUrl: string;

  @ApiProperty({
    description: '2심 법원 판결문',
  })
  @Column()
  secondCourtJudgementUrl: string;

  @ApiProperty({
    description: '최종심 법원 판결문',
  })
  @Column()
  finalCourtJudgementUrl: string;

  @ApiProperty({
    description: '대법원 사건번호',
  })
  @Column()
  finalCourtCaseNumber: string;

  @ApiProperty({
    description: '과거 난민불인정처분 결정통지서',
  })
  @Column()
  previousRejectionNoticeUrl: string;

  @ApiProperty({ description: '과거 난민불인정 사유서' })
  @Column()
  previousRejectionReasonUrl: string;

  @ApiProperty({ description: '과거 난민면접조서 전체' })
  @Column()
  previousInterviewUrl: string;

  @ApiProperty({ description: '과거 난민소송에서 받은 법원 판결문' })
  @Column()
  previousCourtJudgementUrl: string;

  @ApiProperty({ description: '새로운 난민신청서를 접수하였습니까?' })
  @Column()
  hasAppliedAgain: boolean;

  @ApiProperty({
    description:
      '지금까지 작성하지 않은 추가 정보나 추가 하실 말씀이 있으시면 여기에 적어주세요. ',
  })
  @Column({ type: 'longtext' })
  additionalComment: string;

  @ApiProperty({
    description: '개인정보 제공 동의',
  })
  @Column()
  privacyConsent: boolean;
}
