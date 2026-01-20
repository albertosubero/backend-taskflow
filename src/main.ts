import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('TaskFlow API')
    .setDescription('API para gestionar tareas con NestJS y MySQL')
    .setVersion('1.0')
    .build();

  // Generate the Swagger document
  const document = SwaggerModule.createDocument(app, config);
  // Setup the Swagger UI at a specific path (e.g., '/api-docs')
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe()); // <--- Esto activa los validadores
  await app.listen(3000);
}
bootstrap();
