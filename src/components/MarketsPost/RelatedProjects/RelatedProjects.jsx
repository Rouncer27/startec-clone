import "./relatedProjects.scss";
import Slider from "react-slick";
import Project from "./Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  centerMode: true,
  centerPadding: "0",
  arrows: true,
  dots: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const RelatedProjects = ({ currentMarket, projects }) => {
  const relatedProjects = projects.filter((project) => {
    const projectRelatedMarkets =
      project.node.projectPost.marketsRelated.marketsRelated.edges;

    const isMatched = projectRelatedMarkets.find((market) => {
      return market.node.slug === currentMarket;
    });
    return isMatched;
  });

  return (
    <div className="related-projects">
      <div className="related-projects-wrapper">
        <div className="related-projects-title">
          <h2>Related Projects for this market</h2>
        </div>
        <div className="related-projects-slider">
          <Slider {...settings}>
            {relatedProjects.map((project, index) => {
              console.log("projectprojectprojectproject", project);
              return <Project key={index} project={project} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
