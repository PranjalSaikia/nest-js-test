import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function){
        console.log('Request . . . ');
        next();
    }
}

// if no dependencies needed - use functional middlewares
// export function logger(req, res, next) {
//   console.log(`Request...`);
//   next();
// }