import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RefugeeService } from './refugee.service';
import { CreateRefugeeDto } from './dto/create-refugee.dto';
import { UpdateRefugeeDto } from './dto/update-refugee.dto';
import { FormResultDto } from './dto/result.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('refugee')
@Controller('refugee')
export class RefugeeController {
  constructor(private readonly refugeeService: RefugeeService) {}

  @Post()
  create(@Body() body: any) {
    return this.refugeeService.create(body);
  }

  @Post('form')
  submitForm(@Body() body: FormResultDto) {
    this.refugeeService.submitForm(body);
  }

  @Get()
  findAll() {
    return this.refugeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refugeeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.refugeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refugeeService.remove(id);
  }
}
