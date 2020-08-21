import { Controller, Get, Post, Render } from '@nestjs/common';
import { LoginService } from '../login/login.service';
@Controller('login')
export class LoginController {
    constructor(private readonly services : LoginService){}

    @Get()
    @Render('login')
    root(){
        return {
            username : "suphan"
        };
    }
   
    @Post()
    postUser () : any {
        return this.services.potsLogin()
    }

    @Get("/user")
    getUser(){
        return this.services.getUSer();
    }
}
