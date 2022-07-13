import { Module } from '@nestjs/common';
import { DetentionService } from './detention.service';
import { DetenTionController } from './detention.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { Detention, DetentionSchema } from './schemas/detention.schema';
import { UserModule } from 'src/user/user.module';
import { RefugeeModule } from 'src/refugee/refugee.module';

@Module({
  imports: [
    RefugeeModule,
    MongooseModule.forFeature([
      { name: Detention.name, schema: DetentionSchema },
    ]),
  ],
  controllers: [DetenTionController],
  providers: [DetentionService],
})
export class DetentionModule {}
