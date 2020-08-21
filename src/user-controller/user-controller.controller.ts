import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from '../user-service';

@Controller('user')
export class UserControllerController {
    constructor(private readonly service:UserService){
        // const getName = this.service.getUser();
    }
    @Get()
    // getUser(){
    //     return this.service.getUser();
    // }
    // const getName = this.service.getUser();
    @Render('index')
    root(){
        // const value = this.service.getUser()
        return {
            people: [
                { firstname: "Nils", class : "hi" },
                { firstname: "Yehuda", class : "hi"},
                { action : this.service.getUser(), class : "hi-action"},
            ],
        };
    }
}
