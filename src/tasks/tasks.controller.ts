import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Task') // Swagger group title
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear una nueva tarea',
    description:
      'Este método permite registrar una tarea en la base de datos vinculada al usuario.',
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas las tareas',
    description: 'Retorna un arreglo con todas las tareas existentes.',
  })
  findAll() {
    return this.tasksService.findAll();
  }
}
