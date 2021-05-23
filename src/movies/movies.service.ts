import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  getAll() {
    return 'welecome movie api';
  }

  getId(movieId: string) {
    return `selected id name is ${movieId}`;
  }

  createMovie() {
    return 'This will created Movie';
  }

  deleteMovie(movieId: string) {
    return `This will deleted Movie ${movieId}`;
  }

  patchMovie(movieId: string) {
    return `selected id name is ${movieId}`;
  }
}
