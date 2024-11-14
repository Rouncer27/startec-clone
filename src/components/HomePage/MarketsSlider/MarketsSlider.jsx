import Slider from "react-slick";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./marketsSlider.scss";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 6000,
  centerMode: true,
  centerPadding: "50px",
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

const MarketsSlider = (props) => {
  return (
    <div className="markets-slider">
      <div className="markets-slider-wrapper">
        <div className="markets-slider-title">
          <h2>Markets We Serve</h2>
        </div>
      </div>
      <Slider {...settings}>
        {props.data.map((slide, index) => {
          return <Slide key={index} data={slide} />;
        })}
      </Slider>
    </div>
  );
};

export default MarketsSlider;
