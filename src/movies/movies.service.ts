import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getMovie(id: string) {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });

    return true;
  }

  deleteMovie(id: string) {
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  updateMovie(id: string, updateData) {
    const movie = this.getMovie(id);
    this.deleteMovie(id);
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
}
