import "./product.scss";

const Product = ({ title, data, setActiveModal, index }) => {
  return (
    <div
      className="single-product"
      onClick={() => {
        setActiveModal(index);
      }}
    >
      <div className="single-product-image">
        <img src={data.image.node.sourceUrl} alt={data.image.node.altText} />
      </div>
      <div className="single-product-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Product;
