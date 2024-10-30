import { useState } from "react";
import Product from "./Product";
import ProductModal from "./ProductModal";
import "./productCat.scss";

const ProductCat = ({ cat, index }) => {
  const [activeModal, setActiveModal] = useState(null);
  console.log("cat", cat);

  return (
    <div className="product-cat">
      <div className="product-cat-wrapper">
        <div className="product-cat-title">
          <h2>{cat.title}</h2>
        </div>
        <div
          className="product-cat-content"
          dangerouslySetInnerHTML={{ __html: cat.content }}
        />

        <div className="product-cat-container">
          {cat.products.map((product, index) => {
            console.log(product);
            const { node } = product.product.edges[0];
            console.log("node: ", node);
            return (
              <Product
                key={index}
                title={node.title}
                data={node.productPost.productContentComponent}
                setActiveModal={setActiveModal}
                index={index}
              />
            );
          })}
        </div>

        {activeModal !== null ? (
          <ProductModal
            title={cat.products[activeModal].product.edges[0].node.title}
            data={
              cat.products[activeModal].product.edges[0].node.productPost
                .productContentComponent
            }
            setActiveModal={setActiveModal}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProductCat;
