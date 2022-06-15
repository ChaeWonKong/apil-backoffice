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
import { DetensionService } from './detension.service';
import { CreateDetensionDto } from './dto/create-detension.dto';
import { UpdateDetensionDto } from './dto/update-detension.dto';

@ApiTags('Detension')
@Controller('detension')
export class DetensionController {
  constructor(private readonly detensionService: DetensionService) {}

  @Post()
  create(@Body() createDetensionDto: CreateDetensionDto) {
    return this.detensionService.create(createDetensionDto);
  }

  // @Get()
  // findAll() {
  //   return this.detensionService.findAll();
  // }

  @Get(':refugeeId')
  findOneByRefugeeId(@Param('refugeeId') refugeeId: string) {
    return this.detensionService.findOneByRefugeeId(refugeeId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetensionDto: UpdateDetensionDto,
  ) {
    return this.detensionService.update(+id, updateDetensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detensionService.remove(+id);
  }
}
