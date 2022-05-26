import { Module } from '@nestjs/common';
import { DetensionService } from './detension.service';
import { DetensionController } from './detension.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detension } from './entities/detension.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Detension])],
  controllers: [DetensionController],
  providers: [DetensionService],
})
export class DetensionModule {}
