import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {
        movies.map( ({title, time, genres}) => {
          return (
            <div className="movie">
              <h3>{title}</h3>
              {time}
              <ul>
                {genres.map(genre =>
                  <li>{genre}</li>)
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default Movies;
