import { Module } from '@nestjs/common';
import { AttorneyService } from './attorney.service';
import { AttorneyController } from './attorney.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attorney, AttorneySchema } from './schemas/attorney.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: Attorney.name, schema: AttorneySchema },
    ]),
  ],
  controllers: [AttorneyController],
  providers: [AttorneyService],
})
export class AttorneyModule {}
