import { transformShortMovies } from 'mappers';
import React, { useEffect, useState } from 'react';
import { TransformedShortMovie } from 'types';

export const HomePage = () => {
  const [movies, setMovies] = useState<TransformedShortMovie[]>([]);
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=dream&plot=full&apikey=af084387')
      .then((res) => res.json())
      .then(transformShortMovies)
      .then(setMovies);
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        {movies.map(({ poster, title, type, year, imdbID }): any => (
          <li key={imdbID}>
            <img src={poster} alt={title} />
            <p>{type}</p>
            <p>Year: {year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
