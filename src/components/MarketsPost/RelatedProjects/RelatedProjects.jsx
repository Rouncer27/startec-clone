import "./relatedProjects.scss";
import Slider from "react-slick";
import Project from "./Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { act } from "react";

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

const RelatedProjects = ({ currentMarket, projects, data }) => {
  const relatedProjects = projects.filter((project) => {
    const projectRelatedMarkets =
      project.node.projectPost.marketsRelated.marketsRelated.edges;

    const isMatched = projectRelatedMarkets.find((market) => {
      return market.node.slug === currentMarket;
    });
    return isMatched;
  });

  const activateSlider = relatedProjects.length >= 3;

  if (!data.displayRelatedProjects) return null;

  return (
    <div className="related-projects">
      <div className="related-projects-wrapper">
        <div className="related-projects-title">
          <h2>Related Projects for this market</h2>
        </div>
        <div className="related-projects-slider">
          {activateSlider ? (
            <Slider {...settings}>
              {relatedProjects.map((project, index) => {
                console.log("projectprojectprojectproject", project);
                return <Project key={index} project={project} />;
              })}
            </Slider>
          ) : (
            <div className="related-projects-slider-no-slider">
              {relatedProjects.map((project, index) => {
                console.log("projectprojectprojectproject", project);
                return <Project key={index} project={project} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
