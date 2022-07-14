import { Module } from '@nestjs/common';
import { RefugeeManageService } from './refugee-manage.service';
import { RefugeeManageController } from './refugee-manage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RefugeeManage,
  RefugeeManageSchema,
} from './schemas/refugee-manage.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RefugeeManage.name, schema: RefugeeManageSchema },
    ]),
  ],
  controllers: [RefugeeManageController],
  providers: [RefugeeManageService],
})
export class RefugeeManageModule {}
