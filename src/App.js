import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Button from "./Button";
import {movies} from "./movies";

function App() {

  const [currentMovie, setCurrentMovie] = useState(null)

  return (
      <div>
      <h1>Movie Carsolell</h1>

        {

          movies.map((movie, index) => {

            // this is where the logic happens
            return (
                <button key={movie.title} onClick={() =>setCurrentMovie(movie)}>
                  <p>{movie.title}</p>
                  <img src={movie.posterUrl} height={250}/>
                </button>

            )
          })

        }

        {
          currentMovie ?
              <>
              <p>{currentMovie.title}</p>
              <p>{currentMovie.description}</p>
                <p>{currentMovie.rating}</p>
                <p>{currentMovie.director}</p>
                <p>{currentMovie.releaseYear}</p>
                <p>{currentMovie.categories.join(", ")}</p>
              </>
              : <p>Please enter a movie</p>
        }

      </div>

  );
}

export default App;
