import {IsString, IsBoolean} from 'class-validator'

export class CreateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsBoolean()
    isActive: boolean = true;
}