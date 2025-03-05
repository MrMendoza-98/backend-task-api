import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "@prisma/client";

@Controller('tasks')
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Get()
    async getAllTasks(){
        return this.taskService.getAllTask();
    }

    @Post()
    async createTask(@Body() data: Task){
        return this.taskService.createTask(data);
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string){
        const taskFound = await this.taskService.getTaskId(Number(id));
        if(!taskFound) throw new NotFoundException('Task not found');
        return taskFound;
    }

    @Delete(':id')
    async deleteTaskById(@Param('id') id: string){
        try{
            return await this.taskService.deleteTask(Number(id));
        }catch(e){
            throw new NotFoundException('Task does not exist');
        }
    }

    @Put(':id')
    async updateTaskById(@Param('id') id: string, @Body() data: Task){
        try{
            return await this.taskService.updateTask(Number(id), data);
        }catch(e){
            throw new NotFoundException('Task does not exist');
        }
    }
}