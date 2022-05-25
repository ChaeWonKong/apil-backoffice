import { Attorney } from 'src/attorney/entities/attorney.entity';
import { Gender } from 'src/common/gender.enum';
import { RefugeeClaimStage } from 'src/common/refugee-claim-stage.enum';
import { Status } from 'src/common/status.enum';
import { VisitType } from 'src/common/visit-type.enum';
import { Form } from '../entities/form.entity';
import { Refugee } from '../entities/refugee.entity';

export class CreateRefugeeDto extends Refugee {}
