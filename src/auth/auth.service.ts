import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(token: string) {}

  // TODO: refactor
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const { user } = req;

    const payload = {
      username: user.username,
      sub: user.userId,
    };

    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
