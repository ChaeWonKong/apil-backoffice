import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRefugeeManageDto } from './dto/create-refugee-manage.dto';
import { UpdateRefugeeManageDto } from './dto/update-refugee-manage.dto';
import {
  RefugeeManage,
  RefugeeManageDocument,
} from './schemas/refugee-manage.schema';

@Injectable()
export class RefugeeManageService {
  constructor(
    @InjectModel(RefugeeManage.name)
    private refugeeManageModel: Model<RefugeeManageDocument>,
  ) {}

  async createOrUpdate(
    refugee: string,
    createRefugeeManageDto: CreateRefugeeManageDto,
  ) {
    const refugeeManage = await this.refugeeManageModel
      .findOne({ refugee })
      .exec();
    if (refugeeManage) {
      return this.refugeeManageModel.findOneAndUpdate(
        { refugee },
        createRefugeeManageDto,
      );
    }

    return this.refugeeManageModel.insertMany([
      { ...createRefugeeManageDto, refugee },
    ]);
  }

  findOne(refugee: string) {
    return this.refugeeManageModel.findOne({ refugee }).exec();
  }

  update(refugee: string, updateRefugeeManageDto: UpdateRefugeeManageDto) {
    return this.refugeeManageModel
      .findOneAndUpdate({ refugee }, updateRefugeeManageDto)
      .exec();
  }

  remove(refugee: string) {
    return this.refugeeManageModel.findOneAndRemove({ refugee });
  }
}
