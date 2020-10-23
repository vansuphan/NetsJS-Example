import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';
import {resolve } from 'path';
import * as CookieParser from 'cookie-parser';
import "dotenv/config";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port  = process.env.PORT || 7000;
const keyCookie = process.env.KEY_COOKIE || "SUSU";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ------ set cookie ----------
  app.use(CookieParser({
    name : 'first-cookie',
    keys: keyCookie,
    maxAge: 24 * 60 * 60 * 1000
  })); 

  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('hbs');

  const options = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('API description')  
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`, bootstrap);
}

bootstrap();
