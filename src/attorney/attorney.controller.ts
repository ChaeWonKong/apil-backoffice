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
import { AttorneyService } from './attorney.service';
import { CreateAttorneyDto } from './dto/create-attorney.dto';
import { UpdateAttorneyDto } from './dto/update-attorney.dto';

@ApiTags('Attorney')
@Controller('attorney')
export class AttorneyController {
  constructor(private readonly attorneyService: AttorneyService) {}

  @Post()
  create(@Body() createAttorneyDto: CreateAttorneyDto) {
    return this.attorneyService.create(createAttorneyDto);
  }

  @Get()
  findAll() {
    return this.attorneyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attorneyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttorneyDto: UpdateAttorneyDto,
  ) {
    return this.attorneyService.update(+id, updateAttorneyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attorneyService.remove(+id);
  }
}
