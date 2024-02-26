import { useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import MovieForm from "./Components/MovieForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <>
      <h1>Form Demo</h1>
      {/* <MovieList generateList={generateList} /> */}
      <MovieForm movieList={movieList} setMovieList={setMovieList} />
      {!!movieList.length &&
        movieList.map((movie, index) => {
          console.log(movie);
          return <MovieCard key={`${movie.Title}-${index}`} movie={movie} />;
        })}
    </>
  );
}
export default App;
