import { IsString } from 'class-validator';

export class FindAllByRefugeeIdDto {
  @IsString()
  refugeeId: string;
}
