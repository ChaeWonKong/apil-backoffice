import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '../http/http.module';
import { MongoApiService } from './mongo-api.service';

@Module({
  imports: [HttpModule],
  providers: [MongoApiService],
  exports: [MongoApiService],
})
export class MongoApiModule {}
