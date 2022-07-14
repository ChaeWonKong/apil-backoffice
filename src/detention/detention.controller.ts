import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DetentionService } from './detention.service';
import { CreateDetentionDto } from './dto/create-detention.dto';
import { UpdateDetentionDto } from './dto/update-detention.dto';

@ApiTags('Detention')
@Controller('detention')
export class DetenTionController {
  constructor(private readonly detentionService: DetentionService) {}

  @Post()
  create(@Body() createDetentionDto: CreateDetentionDto) {
    return this.detentionService.create(createDetentionDto);
  }

  // @Get()
  // findAll() {
  //   return this.detentionService.findAll();
  // }

  @Get(':refugeeId')
  findOneByRefugeeId(@Param('refugeeId') refugeeId: string) {
    return this.detentionService.findOneByRefugeeId(refugeeId);
  }

  @Patch(':refugeeId')
  update(
    @Param('refugeeId') refugeeId: string,
    @Body() updateDetentionDto: UpdateDetentionDto,
  ) {
    return this.detentionService.update(refugeeId, updateDetentionDto);
  }

  @Delete(':refugeeId')
  remove(@Param('refugeeId') refugeeId: string) {
    return this.detentionService.remove(refugeeId);
  }
}
