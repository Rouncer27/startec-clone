import "./productsCategories.scss";
import ProductCat from "./ProductCat";

const ProductsCategories = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          {data.categories.map((product, index) => {
            return (
              <div key={index}>
                <h2>{product.title}</h2>
              </div>
            );
          })}
        </div>
        <div>
          {data.categories.map((cat, index) => {
            return <ProductCat cat={cat} key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
