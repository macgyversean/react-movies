import { useState } from "react";

const MovieForm = ({ action }) => {
  // Start with a state object that holds our blank items
  const [movieItems, setMovieItems] = useState("");

  const handleSubmit = (e) => {
    // We shouldn't need to prevent default...
    // ...but we're going to, just in case
    e.preventDefault();
    action(movieItems);
  };

  // This will control our inputs and save values into state
  const handleChange = (e) => {
    // Destructure the values we want from the input
    const { value } = e.target;
    // Update the state object with the changes using: [name]:value
    // This syntax will dynamically update the key that matches the 'name' with new 'value'
    setMovieItems(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please put in a movie name:
        <input
          type="text"
          name="item1"
          onChange={handleChange}
          value={movieItems}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
