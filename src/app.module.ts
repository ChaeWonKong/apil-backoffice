import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RefugeeModule } from './refugee/refugee.module';
import { AttorneyModule } from './attorney/attorney.module';
import { DetensionModule } from './detension/detension.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot({ autoLoadEntities: true }),
    RefugeeModule,
    AttorneyModule,
    DetensionModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
