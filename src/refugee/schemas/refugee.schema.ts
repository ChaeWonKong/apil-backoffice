import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Status } from 'src/common/status.enum';
import { VisitType } from 'src/common/visit-type.enum';
import { Gender } from 'src/common/gender.enum';
import { RefugeeClaimStage } from 'src/common/refugee-claim-stage.enum';
import { User } from 'src/user/schemas/user.schema';
// import { Form } from 'src/refugee/schemas/form.schema';

export type RefugeeDocument = Refugee & Document;

export class Form {
  question: string;
  answer: string | boolean | number;
}

@Schema()
export class Refugee {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  nationality: string;

  @Prop()
  email: string;

  @Prop()
  arrivalDate: Date;

  @Prop()
  visitType: VisitType;

  @Prop()
  familyName: string;

  @Prop()
  fullName: string;

  @Prop()
  gender: Gender;

  @Prop()
  address: string;

  @Prop()
  registrationNumber: string;

  @Prop()
  koreanName: string;

  @Prop()
  claimStage: RefugeeClaimStage;

  @Prop()
  status: Status;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  attorney: User;

  @Prop()
  initialContactDate: Date;

  @Prop([Form])
  form: Form[];
}

export const RefugeeSchema = SchemaFactory.createForClass(Refugee);
