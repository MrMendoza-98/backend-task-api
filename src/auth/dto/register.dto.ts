import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';


export class RegisterDto {
    @IsEmail()
    email: string;
    @Transform(({ value }) => value.trim())
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    @IsString()
    @IsNotEmpty()
    role: string;
    @IsNumber()
    @IsNotEmpty()
    id: number;
}