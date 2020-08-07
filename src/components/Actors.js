import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => {
  return(
    <div className="actor">
      <h3>{name}</h3>
      {movies.map(movie => <li>{movie}</li>)}
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(({name, movies}) => {
        return(
          <div className="actor">
            <h3>{name}</h3>
            {movies.map(movie => <li>{movie}</li>)}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
