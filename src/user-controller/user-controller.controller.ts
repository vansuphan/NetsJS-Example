import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from '../user-service';

@Controller('users')
export class UserControllerController {
    constructor(private readonly service:UserService){}
    @Get()
    // getUser(){
    //     return this.service.getUser();
    // }
    @Render('index')
    root(){
        return {
            people: [
                { firstname: "Nils" },
                { firstname: "Yehuda" },
            ],
        };
    }
}
