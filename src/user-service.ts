import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class UserService {
    @Get()
    getUser() : string {
        // console.log("this is action get user");
        return "this is action get user";
    }
    @Post()
    createUSer() : string {
        return "This is action create user";
    }

}
