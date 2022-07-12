import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Role } from 'src/user/enums/role.enum';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FindAllByRefugeeIdDto } from './dto/find-all-by-refugee-id.dto';

@ApiBearerAuth()
@Controller('comment')
@ApiTags('Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @Roles(Role.ADMIN, Role.READ_AND_WRITE)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  create(@Body() body: CreateCommentDto) {
    return this.commentService.insert(body);
  }

  @Get()
  @Roles(Role.ADMIN, Role.READ_AND_WRITE, Role.READ_ONLY)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  fetchAllByRefugeeId(@Query() query: FindAllByRefugeeIdDto) {
    return this.commentService.findAllByRefugee(query);
  }

  @Patch(':commentId')
  @Roles(Role.ADMIN, Role.READ_AND_WRITE)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('commentId') id: string,
    @Body() body: Partial<CreateCommentDto>,
  ) {
    return this.commentService.update(id, body);
  }

  @Delete(':commentId')
  @Roles(Role.ADMIN, Role.READ_AND_WRITE)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('commentId') id: string) {
    return this.commentService.delete(id);
  }
}
