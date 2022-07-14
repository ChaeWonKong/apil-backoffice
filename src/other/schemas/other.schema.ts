import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Refugee } from 'src/refugee/schemas/refugee.schema';

export type OtherDocument = Other & Document;

@Schema()
export class Other {
  @Prop()
  otherCase: string;

  @Prop()
  caseDescription: string;

  @Prop()
  accountNumber: string;

  @Prop()
  financialAid: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Refugee' })
  refugee: Refugee;
}

export const OtherSchema = SchemaFactory.createForClass(Other);
