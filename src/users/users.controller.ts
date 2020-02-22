import { Controller, Post, UsePipes, ValidationPipe, Body, Get, UseGuards, Delete, Param } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'
import {UsersService} from './users.service'

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() : Promise<User[]> {
        return this.usersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOneById(@Param('id') id: string): Promise<User> {
        return this.usersService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/username/:username')
    findOneByUsername(@Param('username') username: string): Promise<User> {
        return this.usersService.findOneByUsername(username);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }
}
