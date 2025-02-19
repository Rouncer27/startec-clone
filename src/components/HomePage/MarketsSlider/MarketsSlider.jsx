import { useEffect } from "react";
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
        centerPadding: "0px",
        arrows: false,
      },
    },
  ],
};

const MarketsSlider = (props) => {
  useEffect(() => {
    console.log("start!");
    var xCoordStart,
      yCoordStart,
      xSlideTrigger = 10,
      slickElement = document.querySelector(".slick-slider");

    console.log("slickElement", slickElement);

    slickElement.addEventListener("touchstart", function (e) {
      console.log("touchstart");
    });

    slickElement.addEventListener("touchstart", function (e) {
      console.log(e);
      e.preventDefault();
      xCoordStart = e.originalEvent.touches[0].clientX;
      yCoordStart = e.originalEvent.touches[0].clientY;
    });

    slickElement.addEventListener("touchend", function (e) {
      console.log(e);
      e.preventDefault();
      var xCoordEnd = e.originalEvent.changedTouches[0].clientX;
      var yCoordEnd = e.originalEvent.changedTouches[0].clientY;

      var deltaX = Math.abs(xCoordEnd - xCoordStart);
      var deltaY = Math.abs(yCoordEnd - yCoordStart);

      if (deltaX > deltaY) {
        // prevent slide while scrolling vertically
        if (xCoordStart > xCoordEnd + xSlideTrigger) {
          slickElement.slick("slickNext");
        } else if (xCoordStart < xCoordEnd + xSlideTrigger) {
          slickElement.slick("slickPrev");
        }
      }
    });
  }, []);

  return (
    <div className="markets-slider">
      <div className="markets-slider-wrapper">
        <div className="markets-slider-title">
          <h2>Markets We Serve</h2>
        </div>
        <Slider className="markets-slider-container" {...settings}>
          {props.data.map((slide, index) => {
            return <Slide key={index} data={slide} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MarketsSlider;
