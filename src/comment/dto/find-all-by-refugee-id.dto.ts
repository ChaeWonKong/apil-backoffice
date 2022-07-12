import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderBy } from 'src/auth/constants/order-by.enum';

export class FindAllByRefugeeIdDto {
  @ApiProperty({ description: '난민 ID' })
  @IsString()
  refugeeId: string;

  @ApiProperty({ description: '정렬방법', enum: OrderBy })
  @IsEnum(OrderBy)
  @IsOptional()
  orderBy?: OrderBy;
}
