interface FullMovieAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: FullMovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
interface TransformedFullMovie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: FullMovieRating[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

interface FullMovieRating {
  Source: string;
  Value: string;
}

interface MoviesApi {
  Search: ShortMovieApi[];
  totalResults: string;
  Response: string;
}

interface ShortMovieApi {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface TransformedShortMovie {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}

export type {
  FullMovieAPI,
  TransformedShortMovie,
  MoviesApi,
  ShortMovieApi,
  TransformedFullMovie,
};
