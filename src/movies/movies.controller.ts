import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getId(@Param('id') movieId: string) {
    return this.moviesService.getMovie(movieId);
  }

  @Post()
  createMovie(@Body() movieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch('/:id')
  patchMovie(@Param('id') movieId: string, @Body() movieData) {
    return this.moviesService.updateMovie(movieId, movieData);
  }
}
