import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RefugeeManageService } from './refugee-manage.service';
import { CreateRefugeeManageDto } from './dto/create-refugee-manage.dto';
import { UpdateRefugeeManageDto } from './dto/update-refugee-manage.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Refugee Manage')
@Controller('refugee-manage')
export class RefugeeManageController {
  constructor(private readonly refugeeManageService: RefugeeManageService) {}

  @Post(':refugeeId')
  create(
    @Param('refugeeId') refugeeId: string,
    @Body() createRefugeeManageDto: CreateRefugeeManageDto,
  ) {
    return this.refugeeManageService.createOrUpdate(
      refugeeId,
      createRefugeeManageDto,
    );
  }

  @Get(':refugeeId')
  findOne(@Param('refugeeId') refugeeId: string) {
    return this.refugeeManageService.findOne(refugeeId);
  }

  @Patch(':refugeeId')
  update(
    @Param('refugeeId') refugeeId: string,
    @Body() updateRefugeeManageDto: UpdateRefugeeManageDto,
  ) {
    return this.refugeeManageService.update(refugeeId, updateRefugeeManageDto);
  }

  @Delete(':refugeeId')
  remove(@Param('refugeeId') refugeeId: string) {
    return this.refugeeManageService.remove(refugeeId);
  }
}
