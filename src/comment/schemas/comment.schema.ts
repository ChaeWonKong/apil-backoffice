import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  updatedAt: Date;

  @Prop()
  refugeeId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
