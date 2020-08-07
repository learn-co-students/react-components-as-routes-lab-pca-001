import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map( ({name, movies}) =>
          <div>
            <h2>Name: {name}</h2>
            <p>Movies:</p>
            <ul>{movies}</ul>
          </div>
        )
      }
    </div>
  );
};

export default Actors;
