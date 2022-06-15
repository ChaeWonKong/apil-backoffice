import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FindAllByRefugeeIdDto } from './dto/find-all-by-refugee-id.dto';

@Controller('comment')
@ApiTags('Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() body: CreateCommentDto) {
    return this.commentService.insert(body);
  }

  @Get()
  fetchAllByRefugeeId(@Query() query: FindAllByRefugeeIdDto) {
    return this.commentService.findAllByRefugee(query.refugeeId);
  }

  @Patch(':commentId')
  update(
    @Param('commentId') id: string,
    @Body() body: Partial<CreateCommentDto>,
  ) {
    return this.commentService.update(id, body);
  }

  @Delete(':commentId')
  delete(@Param('commentId') id: string) {
    return this.commentService.delete(id);
  }
}
