import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AuthLoginMiddleware } from '../auth-login.middleware';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware/middleware-consumer.interface';

@Module({
  providers: [LoginService],
  controllers: [LoginController],
  exports: [LoginService]
})
export class LoginModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(AuthLoginMiddleware)
      .forRoutes('/login');
  }
}
