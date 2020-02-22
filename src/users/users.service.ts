import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOneById(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    findOneByUsername(username: string): Promise<User> {
        return this.usersRepository.findOne({
            where: {
                username
            }
        })
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.username = createUserDto.username;
        user.password = createUserDto.password;

        return this.usersRepository.save(user);
    }

}
