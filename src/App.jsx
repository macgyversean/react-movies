import { useState } from "react";
import "./App.css";
import Movie from "./Components/Movie";
// import MovieList from "./Components/MovieList";
import MovieForm from "./Components/MovieForm";

function App() {
  // const [movieTitle, setMovieTitle] = useState("");
  const [movieList, setMovieList] = useState([]);

  const getFormData = (title) => {
    // setMovieTitle(title);
    const newMovieList = [title, ...movieList];
    setMovieList(newMovieList);
  };

  // function MovieForms() {
  // const [movieListItems, setMovieListItems] = useState({});

  // const generateList = (listItems) => {
  //   setMovieListItems(listItems);
  //   };
  return (
    <>
      <h1>Form Demo</h1>
      {/* <MovieList generateList={generateList} /> */}
      <MovieForm action={getFormData} />
      {!!movieList.length &&
        movieList.map((movie, index) => {
          return <Movie key={`${movie}-${index}`} title={movie} />;
        })}
    </>
  );
}
export default App;
