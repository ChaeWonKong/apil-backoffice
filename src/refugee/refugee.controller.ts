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

@Controller('refugee')
export class RefugeeController {
  constructor(private readonly refugeeService: RefugeeService) {}

  @Post()
  create(@Body() createRefugeeDto: CreateRefugeeDto) {
    return this.refugeeService.create(createRefugeeDto);
  }

  @Post('form')
  submitForm(@Body() body) {
    console.log(body);
  }

  @Get()
  findAll() {
    console.log('refugee');
    return this.refugeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refugeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefugeeDto: UpdateRefugeeDto) {
    return this.refugeeService.update(+id, updateRefugeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refugeeService.remove(+id);
  }
}
