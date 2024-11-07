import Slide from "./Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./heroSlider.scss";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerMode: false,
  arrows: true,
  dots: false,
  pauseOnHover: true,
};

const HeroSlider = (props) => {
  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {props.data.map((slide, index) => {
          return <Slide key={index} data={slide} />;
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
