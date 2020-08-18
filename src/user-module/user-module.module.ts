import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
const connName = "db-nest-example";
@Module({
    imports : [MongooseModule.forRoot(
        'mongodb://localhost:27017/db-nest',
        {
            connectionName : connName,
            // connectionFactory : (connection, connName)=>{

            // }
        }
    )]
})
export class UserModuleModule {}
