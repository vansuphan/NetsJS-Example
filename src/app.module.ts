import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { UserService } from './user-service';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UsersModule } from './users/users.module';
import { Users } from './users';
import { LoggerMiddleware } from './logger.middleware';
import { LoginModule } from './login/login.module';
// import { AuthLoginMiddleware } from './auth-login.middleware'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModuleModule, UsersModule, LoginModule, AuthModule],
  controllers: [AppController, UserControllerController],
  providers: [AppService, UserService, Users],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/users');
  }
}
