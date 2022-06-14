import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  @Prop()
  question: string;

  @Prop()
  answer: string | boolean | number;
}

export const FormSchema = SchemaFactory.createForClass(Form);
