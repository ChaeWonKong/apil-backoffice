import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetensionDto } from './dto/create-detension.dto';
import { UpdateDetensionDto } from './dto/update-detension.dto';
import { Detension } from './entities/detension.entity';

@Injectable()
export class DetensionService {
  constructor(
    @InjectRepository(Detension)
    private readonly detensionRepository: Repository<Detension>,
  ) {}
  create(createDetensionDto: CreateDetensionDto) {
    return 'This action adds a new detension';
  }

  findAll() {
    return `This action returns all detension`;
  }

  findOneByRefugeeId(refugeeId: string) {
    return this.detensionRepository
      .createQueryBuilder('detension')
      .leftJoin('detension.refugee', 'refugee')
      .where('refugee.id = :refugeeId', { refugeeId })
      .getOne();
  }

  update(id: number, updateDetensionDto: UpdateDetensionDto) {
    return `This action updates a #${id} detension`;
  }

  remove(id: number) {
    return `This action removes a #${id} detension`;
  }
}
