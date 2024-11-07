import "./slide.scss";

const Slide = ({ data }) => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="slide-content-title">
          <h2>{data.title}</h2>
        </div>
        <div
          className="slide-content-para"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        {data.buttonRequired && (
          <div className="slide-content-button">
            <a href={data.buttonLink.edges[0].node.uri}>{data.buttonText}</a>
          </div>
        )}
      </div>

      <div className="slide-bgimage">
        <img
          src={data.image.node.sourceUrl}
          alt={data.image.node.altText}
          width={data.image.node.options.width}
          height={data.image.node.options.height}
          loading={data.image.node.options.loading}
        />
      </div>
    </div>
  );
};

export default Slide;
