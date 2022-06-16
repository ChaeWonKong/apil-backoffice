import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Attorney } from 'src/attorney/entities/attorney.entity';
import { Gender } from 'src/common/gender.enum';
import { RefugeeClaimStage } from 'src/common/refugee-claim-stage.enum';
import { Status } from 'src/common/status.enum';
import { VisitType } from 'src/common/visit-type.enum';
import { Form } from '../schemas/form.schema';
import { Refugee } from '../entities/refugee.entity';

export class CreateRefugeeDto extends Refugee {
  @ApiProperty({ description: '' })
  @IsString()
  name: string;

  @ApiProperty({ description: '' })
  @IsString()
  phone: string;

  @ApiProperty({ description: '' })
  @IsString()
  dateOfBirth: Date;

  @ApiProperty({ description: '' })
  @IsString()
  nationality: string;

  @ApiProperty({ description: '' })
  @IsString()
  email: string;

  @ApiProperty({ description: '' })
  @IsString()
  arrivalDate: Date;

  @ApiProperty({ description: '' })
  @IsString()
  visitType: VisitType;

  @ApiProperty({ description: '' })
  @IsString()
  familyName: string;

  @ApiProperty({ description: '' })
  @IsString()
  fullName: string;

  @ApiProperty({ description: '' })
  @IsString()
  gender: Gender;

  @ApiProperty({ description: '' })
  @IsString()
  address: string;

  @ApiProperty({ description: '' })
  @IsString()
  registrationNumber: string;

  @ApiProperty({ description: '' })
  @IsString()
  koreanName: string;

  @ApiProperty({ description: '' })
  @IsString()
  claimStage: RefugeeClaimStage;

  @ApiProperty({ description: '' })
  @IsString()
  status: Status;

  @ApiProperty({ description: '' })
  @IsString()
  attorneyInCharge: Attorney;

  @ApiProperty({ description: '' })
  @IsString()
  initialContactDate: Date;

  @ApiProperty({ description: '' })
  forms: Form[];
}
