const RatingDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.Value}</h2>
      <h2>{product.Source}</h2>
      <figure style={{ maxWidth: "200px" }}></figure>
    </div>
  );
};
export default RatingDetail;
