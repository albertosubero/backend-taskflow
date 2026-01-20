import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService implements OnModuleInit, OnApplicationShutdown {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  // Hook de ciclo de vida: Se ejecuta al iniciar
  onModuleInit() {
    console.log('🚀 El servicio de Tasks ha sido inicializado correctamente.');
  }

  // Hook de ciclo de vida: Se ejecuta al apagar el server
  onApplicationShutdown() {
    console.log('🛑 Cerrando recursos del servicio de Tasks...');
  }

  create(task: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
