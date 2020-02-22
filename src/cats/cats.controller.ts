import { Controller, Get, Param, Post, Body, HttpException, HttpStatus, Res, UsePipes, UseGuards } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { ValidationPipe } from 'src/validation/validation.pipe';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cats')
@UseGuards(JwtAuthGuard)
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createCatDto: CreateCatDto) {
        
        this.catsService.create(createCatDto);
    }
}
