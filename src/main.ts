import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/exception-filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const origin = ['http://localhost:3000'];
  app.enableCors({ origin });

  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Global Exception Filter
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

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
