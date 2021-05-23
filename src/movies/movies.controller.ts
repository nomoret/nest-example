import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getId(@Param('id') movieId: string) {
    return this.moviesService.getId(movieId);
  }

  @Post()
  createMovie() {
    return this.moviesService.createMovie();
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch('/:id')
  patchMovie(@Param('id') movieId: string) {
    return this.moviesService.patchMovie(movieId);
  }
}
