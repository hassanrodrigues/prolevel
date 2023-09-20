import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/environments/config.module';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
