import { useState, useEffect } from "react";
import RatingDetail from "./Ratings";

function Movie({ title }) {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const tokey = "b5451f2b";
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${tokey}`;

    const apiData = await fetch(url).then((response) => response.json());
    setData(apiData);
  };

  useEffect(() => {
    fetchData();
  }, [title]);

  return (
    <>
      {data && (
        <>
          <h1>{data.Title}</h1>
          <div>{data.Year}</div>
          <div>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <p>{data.Plot}</p>
          {data.Ratings?.length &&
            data.Ratings?.map((item, index) => {
              return <RatingDetail product={item} key={index} />;
            })}
        </>
      )}
    </>
  );
}

export default Movie;

// key={RatingsDetail.Value}
