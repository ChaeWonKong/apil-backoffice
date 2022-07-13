import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Job } from '../enums/job.enum';
import { Role } from '../enums/role.enum';
import { UserType } from '../enums/user-type.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  uid: string;

  @Prop()
  name: string;

  @Prop()
  phone?: string;

  @Prop()
  type: UserType | string;

  @Prop()
  email: string;

  @Prop()
  role: Role;

  @Prop()
  job: Job;
}

export const UserSchema = SchemaFactory.createForClass(User);
