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
  autoplay: false,
  autoplaySpeed: 10000,
  centerMode: false,
  arrows: false,
  dots: true,
  pauseOnHover: true,
};

const HeroSlider = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h1>Hero Slider</h1>
      </div>
    </div>
  );
};

export default HeroSlider;
