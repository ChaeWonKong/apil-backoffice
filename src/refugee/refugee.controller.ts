import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RefugeeService } from './refugee.service';
import { CreateRefugeeDto } from './dto/create-refugee.dto';
import { UpdateRefugeeDto } from './dto/update-refugee.dto';
import { FormResultDto } from './dto/result.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/user/enums/role.enum';

@ApiBearerAuth()
@ApiTags('refugee')
@Controller('refugee')
export class RefugeeController {
  constructor(private readonly refugeeService: RefugeeService) {}

  @Post()
  @Roles(Role.ADMIN, Role.READ_AND_WRITE)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  create(@Body() body: any) {
    return this.refugeeService.create(body);
  }

  @Post('form')
  @Roles(Role.ADMIN, Role.READ_AND_WRITE)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  submitForm(@Body() body: FormResultDto) {
    this.refugeeService.submitForm(body);
  }

  @Get()
  @Roles(Role.ADMIN, Role.READ_AND_WRITE, Role.READ_ONLY)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.refugeeService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.READ_AND_WRITE, Role.READ_ONLY)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.refugeeService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.READ_AND_WRITE)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() body) {
    return this.refugeeService.update(id, body);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.READ_AND_WRITE)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.refugeeService.remove(id);
  }
}
