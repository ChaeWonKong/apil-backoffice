import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}

  insert(data: CreateCommentDto) {
    return this.commentModel.insertMany([data]);
  }

  findAllByRefugee(refugeeId: string) {
    return this.commentModel.find({ refugeeId }).exec();
  }

  update(commentId: string, data: Partial<CreateCommentDto>) {
    return this.commentModel.updateOne({ _id: commentId }, data).exec();
  }

  delete(commentId: string) {
    return this.commentModel.findByIdAndDelete(commentId).exec();
  }
}
