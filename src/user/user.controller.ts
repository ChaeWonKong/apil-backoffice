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
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
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
  @Patch(':uid/role')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  editUserRole(
    @Param('uid') uid: string,
    @Body()
    updateUserRoleDto: UpdateUserRoleDto,
  ) {
    return this.userService.updateUserRole(uid, updateUserRoleDto.role);
  }
}
