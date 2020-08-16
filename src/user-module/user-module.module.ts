import { Module } from '@nestjs/common';
import { MongooseModule } '@nestjs/mongoose';
@Module({
    imports : [MongooseModule.forRoot(
        'mongodb://localhost:27017/db-nest'
    )]
})
export class UserModuleModule {}
