import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserType } from 'src/user/enums/user-type.enum';
import { Role } from 'src/user/enums/role.enum';
import { GoogleProfile } from '../interfaces/google-profile.interface';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly userService: UserService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }

  // TODO: refactor & update logic
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: GoogleProfile,
    done: VerifyCallback,
  ): Promise<any> {
    const { emails, displayName, photos, id } = profile;

    //TODO: return token
    try {
      const user = await this.userService.findUserByEmail(emails[0].value);
      done(null, user);
    } catch (e) {
      // if not user
      const userCreateRes = await this.userService.createUser({
        name: displayName,
        email: emails[0].value,
        role: Role.UNAUTHORIZED,
        uid: id,
      });
      done(null, userCreateRes);
    }
  }
}
