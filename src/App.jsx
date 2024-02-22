import { useState } from "react";
import "./App.css";
import Movies from "./Components/Movie";
// import MovieList from "./Components/MovieList";
import MovieForm from "./Components/MovieForm";

function App() {
  const [someText, setSomeText] = useState("");
  const getFormData = (text) => setSomeText(text);

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
      <Movies />
    </>
  );
}
export default App;
