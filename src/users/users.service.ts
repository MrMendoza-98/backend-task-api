import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}
  
  create(data: User): Promise<User> {
    return this.prisma.user.create({
      data
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ 
      where: { email: email } 
    });
  }

  findOneByEmailWithoutPass(email: string) {
    return this.prisma.user.findUnique({ 
      where: { email: email },
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
        role: true,
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
        role: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
