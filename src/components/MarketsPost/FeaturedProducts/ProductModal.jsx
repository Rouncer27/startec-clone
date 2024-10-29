import "./productModal.scss";

const ProductModal = ({ title, data, setActiveModal }) => {
  return (
    <div className="product-modal">
      <div className="product-modal-inner">
        <div className="product-modal-inner-image">
          <img src={data.image.node.sourceUrl} alt={data.image.node.altText} />
        </div>
        <div className="product-modal-inner-content">
          <div>
            <h3>{title}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
          {data.buttonRequired ? (
            <div className="product-modal-inner-content-button">
              <a href={data.buttonLink.edges[0].node.uri}>{data.buttonText}</a>
            </div>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => {
            setActiveModal(null);
          }}
        >
          X
        </button>
      </div>
      <div
        onClick={() => {
          setActiveModal(null);
        }}
        className="product-modal-overlay"
      ></div>
    </div>
  );
};

export default ProductModal;
