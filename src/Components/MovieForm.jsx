import { useState } from "react";

const MovieForm = ({ movieList, setMovieList }) => {
  const [title, setTitle] = useState("");
  // Start with a state object that holds our blank items

  const fetchData = async (title) => {
    const tokey = "b5451f2b";
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${tokey}`;
    const apiData = await fetch(url).then((response) => response.json());
    if (apiData.Error) {
      alert("Movie doesn't exist in the database");
      return;
    }
    const exists = movieList.some((movie) => movie.Title === apiData.Title);
    if (!exists) {
      setMovieList([apiData, ...movieList.slice()]);
    } else {
      alert("Movie already exists in the list");
    }
  };

  const handleSubmit = (e) => {
    // We shouldn't need to prevent default...
    // ...but we're going to, just in case
    e.preventDefault();
    fetchData(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please put in a movie name:
        <input
          type="text"
          name="item1"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <button type="submit" disabled={!title}>
        Submit
      </button>
    </form>
  );
};

export default MovieForm;
