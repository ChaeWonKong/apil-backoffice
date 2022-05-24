import { Injectable } from '@nestjs/common';
import { CreateAttorneyDto } from './dto/create-attorney.dto';
import { UpdateAttorneyDto } from './dto/update-attorney.dto';

@Injectable()
export class AttorneyService {
  create(createAttorneyDto: CreateAttorneyDto) {
    return 'This action adds a new attorney';
  }

  findAll() {
    return `This action returns all attorney`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attorney`;
  }

  update(id: number, updateAttorneyDto: UpdateAttorneyDto) {
    return `This action updates a #${id} attorney`;
  }

  remove(id: number) {
    return `This action removes a #${id} attorney`;
  }
}
