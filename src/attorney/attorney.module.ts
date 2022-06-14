import { Module } from '@nestjs/common';
import { AttorneyService } from './attorney.service';
import { AttorneyController } from './attorney.controller';

@Module({
  controllers: [AttorneyController],
  providers: [AttorneyService],
})
export class AttorneyModule {}
