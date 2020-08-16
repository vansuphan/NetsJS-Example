import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { UserService } from './user-service';
// import { UserService } from './user-service/user-service';
import { UserControllerController } from './user-controller/user-controller.controller';

@Module({
  imports: [UserModuleModule],
  controllers: [AppController, UserControllerController],
  providers: [AppService, UserService],
})
export class AppModule {}
