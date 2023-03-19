// import { transformShortMovies } from 'mappers';
import React, { useEffect, useState } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store/moviesSlice';
// import { TransformedShortMovie } from 'types';

export const HomePage = () => {
  const { isLoading, movies } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ poster, title, type, year, imdbID }): any => (
            <li key={imdbID}>
              <img src={poster} alt={title} />
              <p>{type}</p>
              <p>Year: {year}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
