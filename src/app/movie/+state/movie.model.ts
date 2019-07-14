import { ID } from '@datorama/akita';

export interface Movie { // it's typescript. describe Type javascript object
  id: string; // from database
  cover_url: string;
  description: string;
  title: string;
  rating: number;
}

/**
 * A factory function that creates Movie
 */
export function createMovie(params: Partial<Movie>) {
  return {

  } as Movie;
}
