import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from './enums/role.enum';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('signin/:id')
  signIn(@Param('id') id: string) {
    // google uid -> JWT token
    return this.userService.signInUserByUid(id);
  }

  @ApiBearerAuth()
  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.userService.findAllUser();
  }

  @ApiBearerAuth()
  @Get(':uid')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('uid') uid: string) {
    return this.userService.findUserByUid(uid);
  }

  @ApiBearerAuth()
  @Patch(':uid')
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  updateUser(
    @Param('uid') uid: string,
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(uid, updateUserDto);
  }

  @ApiBearerAuth()
  @Patch(':uid/role')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  updateUserRole(
    @Param('uid') uid: string,
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(uid, updateUserDto);
  }
}
