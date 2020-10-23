import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class LoginService {
    
    // @Get()
    // getLogin() : any{
    //     console.log("login");
    //     return "Get route Login"
    // }

    @Post()
    potsLogin() : any{
        return "Post route Login"
    }
}
