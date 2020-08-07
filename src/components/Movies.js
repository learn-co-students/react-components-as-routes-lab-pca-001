import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map( ({title, time, genres}) =>
          <div>
            <h2>Name: {title}</h2>
            <p>Time: {time}</p>
            <p>Genres:</p>
            <ul>{genres}</ul>
          </div>
        )
      }
    </div>
  );
};

export default Movies;
