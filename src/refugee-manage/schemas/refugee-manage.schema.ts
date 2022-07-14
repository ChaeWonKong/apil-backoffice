import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Refugee } from 'src/refugee/schemas/refugee.schema';
import { Reason } from '../enums/reason.enum';

export type RefugeeManageDocument = RefugeeManage & Document;

@Schema()
export class RefugeeManage {
  @Prop()
  //난민신청일
  applyDate: Date;

  @Prop()
  // 난민 거부 처분 결정 통지서
  rejectedDate: Date;

  @Prop()
  reason: Reason | string;

  @Prop()
  // 이의신청일
  objectionDate: Date;

  @Prop()
  // 난민신청단계별 결과
  result: string;

  @Prop()
  keyword: string;

  @Prop()
  caseNumber: string;

  @Prop()
  immigrationOffice: string;

  @Prop()
  // 조력상황
  aid: string;

  @Prop()
  // 난민 인정 일자
  acceptedDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Refugee' })
  refugee: Refugee;
}

export const RefugeeManageSchema = SchemaFactory.createForClass(RefugeeManage);
