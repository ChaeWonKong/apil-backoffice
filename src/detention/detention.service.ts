import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { RefugeeService } from 'src/refugee/refugee.service';

import { Repository } from 'typeorm';
import { CreateDetentionDto } from './dto/create-detention.dto';
import { UpdateDetentionDto } from './dto/update-detention.dto';
import { Detention, DetentionDocument } from './schemas/detention.schema';

@Injectable()
export class DetentionService {
  constructor(
    @InjectModel(Detention.name)
    private detentionModel: Model<DetentionDocument>,
    private refugeeService: RefugeeService,
  ) {}

  async create(refugee: string, createDto: CreateDetentionDto) {
    try {
      const detentions = await this.detentionModel.find({ refugee });
      if (detentions.length) {
        return this.detentionModel.findOneAndUpdate({ refugee }, createDto);
      }

      return this.detentionModel.insertMany([{ refugee, createDto }]);
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    return `This action returns all detention`;
  }

  findOneByRefugeeId(refugeeId: string) {
    return this.detentionModel.findOne({ refugee: refugeeId });
  }

  async update(refugeeId: string, updateDetentionDto: UpdateDetentionDto) {
    try {
      return this.detentionModel.findOneAndUpdate(
        { refugee: refugeeId },
        updateDetentionDto,
      );
    } catch (e) {
      console.log(e);
    }
  }

  remove(refugeeId: string) {
    return this.detentionModel.findOneAndRemove({ refugee: refugeeId });
  }
}
