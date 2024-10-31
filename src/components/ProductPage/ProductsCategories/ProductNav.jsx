import "./productNav.scss";

const ProductNav = ({ product }) => {
  return (
    <div className="product-nav">
      <a
        title={`${product.title} - click to scroll down to section`}
        href={`#${product.sectionId}`}
      >
        {/* <button type="button" onClick={(e) => scrollHandle(e, product.sectionId)}> */}
        <div className="product-nav-title">
          <h2>{product.title}</h2>
        </div>
        <div className="product-nav-bg-icon" />
        {/* </button> */}
      </a>
    </div>
  );
};

export default ProductNav;
