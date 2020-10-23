import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthLoginMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("auth",req.body);
    const data = req.body;
    next();
  }
}
