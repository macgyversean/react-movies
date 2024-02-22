import { useState, useEffect } from "react";
import RatingDetail from "./Ratings";

// import RatingsDetail from "./RatingsDetail";

import MovieForm from "./MovieForm";

function Movies() {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const tokey = "b5451f2b";
    const url = `http://www.omdbapi.com/?t=moana&apikey=${tokey}`;

    const apiData = await fetch(url).then((response) => response.json());
    console.log(apiData);
    setData(apiData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data && data.Ratings?.length && (
        <>
          <h1>This is going to be a movie review site</h1>
          <div>{data.Title}</div>
          <div>{data.Year}</div>
          <div>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <p>{data.Plot}</p>
          {data.Ratings?.map((item, index) => {
            return <RatingDetail product={item} key={index} />;
          })}
        </>
      )}
      ;
    </>
  );
}

export default Movies;

// key={RatingsDetail.Value}
