import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Refugee } from 'src/refugee/schemas/refugee.schema';
import { User } from 'src/user/schemas/user.schema';

export type AttorneyDocument = Attorney & Document;

@Schema()
export class Attorney {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const AttorneySchema = SchemaFactory.createForClass(Attorney);
