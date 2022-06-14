import { Module } from '@nestjs/common';
import { RefugeeService } from './refugee.service';
import { RefugeeController } from './refugee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refugee } from './entities/refugee.entity';
import { Form } from './entities/form.entity';
import { MongoApiModule } from 'src/common/mongo-api/mongo-api.module';
import { HttpModule } from 'src/common/http/http.module';

@Module({
  imports: [HttpModule, MongoApiModule],
  controllers: [RefugeeController],
  providers: [RefugeeService],
})
export class RefugeeModule {}
