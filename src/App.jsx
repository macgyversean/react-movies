import { useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import MovieForm from "./Components/MovieForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  console.log({ movieList });

  return (
    <>
      <h1>Form Demo</h1>
      {/* <MovieList generateList={generateList} /> */}
      <MovieForm movieList={movieList} setMovieList={setMovieList} />
      {!!movieList.length &&
        movieList.map((movie, index) => {
          return <MovieCard key={`${movie}-${index}`} movie={movie} />;
        })}
    </>
  );
}
export default App;
