import "./productsCategories.scss";
import ProductNav from "./ProductNav";
import ProductCat from "./ProductCat";

const ProductsCategories = ({ data }) => {
  return (
    <div className="products-categories">
      <div className="products-categories-nav">
        {data.categories.map((product, index) => {
          return <ProductNav product={product} key={index} />;
        })}
      </div>
      <div className="products-categories-content">
        {data.categories.map((cat, index) => {
          return <ProductCat cat={cat} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductsCategories;
