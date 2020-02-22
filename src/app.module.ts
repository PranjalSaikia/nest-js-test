import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import * as cors from 'cors'
import * as helmet from 'helmet'
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesService } from './heros/heroes.service';
import { HeroesController } from './heros/heroes.controller';
import { HeroesModule } from './heros/heroes.module';

@Module({
  imports: [CatsModule, AuthModule, UsersModule, TypeOrmModule.forRoot(), HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, cors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
      }), helmet())
      // .apply(cors(), helmet()) - if you want to use more than one
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      // )
      .forRoutes('cats');
    // .forRoutes(CatsController)
    //.forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
