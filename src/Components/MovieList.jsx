const MovieList = ({ items }) => {
  const { item1, item2, item3 } = items;
  return (
    <>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </>
  );
};

export default MovieList;
