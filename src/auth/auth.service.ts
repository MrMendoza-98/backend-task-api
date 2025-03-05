import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}
    async register( {email,password,name,role,id}: RegisterDto){
        const user = await this.usersService.findOneByEmail(email);
        if(user){  
            throw new BadRequestException('Email already exists');
        }
        return await this.usersService.create({
            email,
            password: await bcryptjs.hash(password, 10),
            name,
            role,
            id
        });
    }

    async login({email,password}: LoginDto){
        const user = await this.usersService.findOneByEmail(email);
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if(!isPasswordValid){
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = {email: user.email, sub: user.id, role: user.role};
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

    async profile({email,id,role}: {email: string, id: string, role: string}){
        return await this.usersService.findOneByEmailWithoutPass(email);
    }
}
