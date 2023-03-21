import { FullMovieAPI, FullMovie } from 'types';

export const transformFullMovie = (movie: any): any =>
  Object.keys(movie).reduce((acc: any, key) => {
    acc[key.toLowerCase()] = movie[key];
    return acc;
  }, {});
