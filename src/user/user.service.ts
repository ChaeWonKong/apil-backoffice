import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
// import { getAuth } from 'firebase-admin/auth';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from './enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    // uid, name, phone, type, email, role
    try {
      const insertRes = await this.userModel.insertMany([createUserDto]);
      if (!insertRes.length) {
        throw new HttpException(
          'Create user failed',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const user = insertRes.pop();

      return user;
    } catch (e) {
      throw e;
    }
  }

  async findAllUser() {
    try {
      return this.userModel.find();
    } catch (e) {
      throw new HttpException(
        e.message || 'Unexpected server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findUserByUid(uid: string) {
    let user: User & { _id: any };

    try {
      user = await this.userModel.findOne({ uid }).exec();
      if (!user) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      }
      return user;
    } catch (e) {
      throw e;
    }
  }

  async findUserByEmail(email: string) {
    let user: User & { _id: any };

    try {
      user = await this.userModel.findOne({ email }).exec();
      if (!user) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      }
      return user;
    } catch (e) {
      throw e;
    }
  }

  async verifyUser() {
    // let token: string;
    // let role: string = 'ADMIN'; // TODO: database
    // const additionalClaims = {
    //   role,
    // };
    // try {
    //   token = await admin.auth().createCustomToken(uid, additionalClaims);
    // } catch (e) {
    //   throw e;
    // }
    // return { token };
  }

  async signInUserByUid(uid: string) {
    // find user by UID
    let user: User & { _id: any };
    let token: string;

    try {
      user = await this.userModel.findOne({ uid }).exec();
      if (!user) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      }
    } catch (e) {
      throw e;
    }

    // create token
    const additionalClaims = {
      role: user.role,
    };

    // return new token
    return { token };
  }

  async updateUserRole(uid: string, role: Role) {
    try {
      return this.userModel.findOneAndUpdate({ uid }, { role });
    } catch (e) {
      throw new HttpException(
        'Unexpected error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
