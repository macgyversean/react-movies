import RatingDetail from "./Ratings";
import styles from "./movieDetails.module.css";
import { useState } from "react";
// We shouldn't need to prevent default...
// ...but we're going to, just in case

function MovieCard({ movie }) {
  const [review, setReview] = useState(localStorage.getItem(movie.Title));

  const handleSubmit = (e) => {
    e.preventDefault();
    setReview("");
    localStorage.setItem(movie.Title, review);
  };
  return (
    <div className={styles.root}>
      <>
        {movie && (
          <>
            <h1>{movie.Title}</h1>
            <div>{movie.Year}</div>
            <div>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%", maxWidth: "100%", height: "auto" }}
              />
            </div>
            <p>{movie.Plot}</p>
            {movie.Ratings?.length &&
              movie.Ratings?.map((item, index) => {
                return <RatingDetail product={item} key={index} />;
              })}

            <form onSubmit={handleSubmit}>
              <label>
                Please put in a review for the movie:
                <input
                  type="text"
                  name="item1"
                  onChange={(e) => setReview(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
              <p>rating {review}</p>
            </form>
          </>
        )}
      </>
    </div>
  );
}

export default MovieCard;

// key={RatingsDetail.Value}
