import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const origin = ['http://localhost:3000'];
  app.enableCors({ origin });

  const config = new DocumentBuilder()
    .setTitle('Oh Good Project Server API')
    .setDescription('Oh Good Project API 명세서')
    .setVersion('Dev_1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
