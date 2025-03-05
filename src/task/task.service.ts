import { PrismaService } from "src/prisma/prisma.service";
import { Task } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService{
    constructor(private prisma: PrismaService){}

    async getAllTask(): Promise<Task[]>{
        return this.prisma.task.findMany();
    }

    async getTaskId(id:number){
        return this.prisma.task.findUnique({
            where: {
              id: id,
            },
        });
    }

    async createTask(data: Task): Promise<Task>{
        return this.prisma.task.create({
            data
        });
    }

    async updateTask(id:number, data: Task): Promise<Task>{
        return this.prisma.task.update({
            where: {
                id: id
            },
            data: data
        });
    }

    async deleteTask(id:number): Promise<Task>{
        return this.prisma.task.delete({
            where: {
                id: id
            }
        });
    }
}