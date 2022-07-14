import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOtherDto } from './dto/create-other.dto';
import { UpdateOtherDto } from './dto/update-other.dto';
import { OtherService } from './other.service';

@ApiTags('Other')
@Controller('other')
export class OtherController {
  constructor(private readonly otherService: OtherService) {}

  @Post(':refugeeId')
  create(
    @Param('refugeeId') refugeeId: string,
    @Body() createDto: CreateOtherDto,
  ) {
    return this.otherService.create(refugeeId, createDto);
  }

  @Get(':refugeeId')
  findByRefugeeId(@Param('refugeeId') refugeeId: string) {
    return this.otherService.findOne(refugeeId);
  }

  @Patch(':refugeeId')
  updateByRefugeeId(
    @Param('refugeeId') refugeeId: string,
    @Body() updateDto: UpdateOtherDto,
  ) {
    return this.otherService.findOneAndUpdate(refugeeId, updateDto);
  }
}
