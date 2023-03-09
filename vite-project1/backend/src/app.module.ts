import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from './config/config.module';
// import { ConfigService } from './config/config.service';
// import { UrlModule } from './schemas/url.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/Stream')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
