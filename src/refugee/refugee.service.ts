import { Injectable } from '@nestjs/common';
import { CreateRefugeeDto } from './dto/create-refugee.dto';
import { UpdateRefugeeDto } from './dto/update-refugee.dto';

@Injectable()
export class RefugeeService {
  create(createRefugeeDto: CreateRefugeeDto) {
    return 'This action adds a new refugee';
  }

  findAll() {
    return `This action returns all refugee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} refugee`;
  }

  update(id: number, updateRefugeeDto: UpdateRefugeeDto) {
    return `This action updates a #${id} refugee`;
  }

  remove(id: number) {
    return `This action removes a #${id} refugee`;
  }
}
