import { ApiProperty } from '@nestjs/swagger';

export class CreateOtherDto {
  @ApiProperty({ description: '난민 소송외 사건' })
  otherCase: string;

  @ApiProperty({ description: '소송구조' })
  caseDescription: string;

  @ApiProperty({ description: '계좌번호' })
  accountNumber: string;

  @ApiProperty({ description: '재정지원 기록' })
  financialAid: string;
}
