import { IsDateString, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  refugeeId: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsDateString()
  updatedAt: Date;
}
