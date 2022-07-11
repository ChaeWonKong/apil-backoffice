import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Roles } from './common/decorators/roles.decorator';
import { RolesGuard } from './common/guards/roles.guard';
import { Role } from './user/enums/role.enum';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard('jwt'))
  getHello(@Req() req): string {
    return this.appService.getHello();
  }
}
