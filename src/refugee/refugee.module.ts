import { Module } from '@nestjs/common';
import { RefugeeService } from './refugee.service';
import { RefugeeController } from './refugee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refugee } from './entities/refugee.entity';
import { Form } from './entities/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Refugee, Form])],
  controllers: [RefugeeController],
  providers: [RefugeeService],
})
export class RefugeeModule {}
