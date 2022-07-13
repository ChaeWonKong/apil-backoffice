import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Refugee } from 'src/refugee/schemas/refugee.schema';

export type DetentionDocument = Detention & Document;

@Schema()
export class Detention {
  @Prop()
  isDetained: boolean;

  @Prop()
  detainedFacility: string;

  @Prop()
  reason: string;

  @Prop()
  relatedCase: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Refugee' })
  refugee: Refugee;
}

export const DetentionSchema = SchemaFactory.createForClass(Detention);
