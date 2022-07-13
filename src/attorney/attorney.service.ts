import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { CreateAttorneyDto } from './dto/create-attorney.dto';
import { UpdateAttorneyDto } from './dto/update-attorney.dto';
import { Attorney, AttorneyDocument } from './schemas/attorney.schema';

@Injectable()
export class AttorneyService {
  constructor(
    @InjectModel(Attorney.name)
    private attorneyModel: Model<AttorneyDocument>,
    private readonly userService: UserService,
  ) {}
  async create({ name, userUid }: CreateAttorneyDto) {
    try {
      const user = await this.userService.findUserByUid(userUid);
      const insertRes = await this.attorneyModel.insertMany([{ name, user }]);
      console.log(insertRes);
    } catch (e) {
      throw e;
    }
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
