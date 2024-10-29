import { useState } from "react";

import Product from "./Product";
import ProductModal from "./ProductModal";

import "./featuredProducts.scss";

const FeaturedProducts = ({ data }) => {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <div className="featured-products">
      <div className="featured-products-wrapper">
        <div className="featured-products-title">
          <h2>{data.title}</h2>
        </div>
        <div className="featured-products-container">
          {data.products.map((product, index) => {
            const { node } = product.product.edges[0];
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
            title={data.products[activeModal].product.edges[0].node.title}
            data={
              data.products[activeModal].product.edges[0].node.productPost
                .productContentComponent
            }
            setActiveModal={setActiveModal}
          />
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedProducts;
