import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'El título de la tarea', example: 'Comprar pan' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  title: string;

  @ApiProperty({ description: 'Descripción detallada', required: false })
  @IsString()
  @IsOptional()
  description?: string;
}
