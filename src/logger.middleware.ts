import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Here logger middleware");
    if(req.query){
      var queryReq = req
      console.log(req);
    }
    next();
  }
}
