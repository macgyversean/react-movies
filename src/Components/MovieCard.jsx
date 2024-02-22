import styles from movieDetails.module.css


const MovieDetail = ({movie}) =>{
    return(
<div className={styles.root}>
<div className="card-image"></div>  
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
</div>
    )
}




export default MovieDetail;