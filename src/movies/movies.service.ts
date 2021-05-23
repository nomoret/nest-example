import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  getAll() {
    return this.movies;
  }

  getMovie(id: string) {
    return this.movies.find((movie) => movie.id === +id);
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });

    return true;
  }

  deleteMovie(id: string) {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  patchMovie(movieId: string) {
    return `selected id name is ${movieId}`;
  }
}
