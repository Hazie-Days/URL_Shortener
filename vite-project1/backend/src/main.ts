import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
// import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config = new ConfigService();
  app.enableCors();
  // await app.listen(await config.getPortConfig());
  await app.listen(3000);
}
bootstrap();
