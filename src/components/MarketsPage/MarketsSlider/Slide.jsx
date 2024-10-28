import "./slider.scss";

const Slide = ({ data }) => {
  return (
    <div className="marekts-slide">
      <div className="marekts-slide-image">
        <div className="marekts-slide-image-wrap">
          <img src={data.image.node.sourceUrl} alt={data.image.node.altText} />
        </div>
      </div>
      <div className="marekts-slide-wrapper">
        <div className="marekts-slide-title">
          <h2>{data.title}</h2>
        </div>
        <div
          className="marekts-slide-para"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        {data.buttonRequired && (
          <div className="marekts-slide-button">
            <a href={data.marketLink.edges[0].node.uri}>{data.buttonText}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
