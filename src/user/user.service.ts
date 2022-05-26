import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class UserService {
  verifyUser(authDto: AuthDto) {}
}
