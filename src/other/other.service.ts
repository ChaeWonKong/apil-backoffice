import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOtherDto } from './dto/create-other.dto';
import { UpdateOtherDto } from './dto/update-other.dto';
import { Other, OtherDocument } from './schemas/other.schema';

@Injectable()
export class OtherService {
  constructor(
    @InjectModel(Other.name)
    private otherModel: Model<OtherDocument>,
  ) {}

  async create(refugeeId: string, createDto: CreateOtherDto) {
    try {
      const other = await this.otherModel.findOne({ refugee: refugeeId });
      if (other) {
        return this.otherModel.findOneAndUpdate(
          { refugee: refugeeId },
          createDto,
        );
      }

      return this.otherModel.insertMany([{ ...createDto, refugee: refugeeId }]);
    } catch (e) {
      throw e;
    }
  }

  findOne(refugeeId: string) {
    return this.otherModel.findOne({ refugee: refugeeId });
  }

  findOneAndUpdate(refugeeId: string, updateDto: UpdateOtherDto) {
    try {
      return this.otherModel.findOneAndUpdate(
        { refugee: refugeeId },
        updateDto,
      );
    } catch (e) {
      throw e;
    }
  }
}
