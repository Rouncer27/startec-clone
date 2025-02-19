import { useEffect, useRef } from "react";
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
  dots: true,
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
      },
    },
  ],
};

const MarketsSlider = (props) => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log("start!");
    let xCoordStart = 10;
    let yCoordStart = 10;
    let xSlideTrigger = 10;

    const slickElement = document.querySelector(".slick-slider");
    const slickSlides = document.querySelectorAll(".slick-slide");

    console.log("sliderRef", sliderRef);
    console.log("slickElement", slickElement);

    slickElement.addEventListener("touchstart", function (e) {
      console.log("touchstart", e);
    });

    slickSlides.forEach((slide) => {
      slide.addEventListener("touchstart", function (e) {
        console.log("SLIDE touchstart", e);
      });
    });

    slickElement.addEventListener("touchstart", function (e) {
      console.log(e);
      e.preventDefault();
      xCoordStart = e.clientX;
      yCoordStart = e.clientY;
    });

    slickElement.addEventListener("touchend", function (e) {
      console.log(e);
      e.preventDefault();
      var xCoordEnd = e.clientX;
      var yCoordEnd = e.clientY;

      var deltaX = Math.abs(xCoordEnd - xCoordStart);
      var deltaY = Math.abs(yCoordEnd - yCoordStart);

      if (deltaX > deltaY) {
        // prevent slide while scrolling vertically
        if (xCoordStart > xCoordEnd + xSlideTrigger) {
          sliderRef.current.slickNext();
        } else if (xCoordStart < xCoordEnd + xSlideTrigger) {
          sliderRef.current.slickNext();
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
        <Slider
          ref={sliderRef}
          className="markets-slider-container"
          {...settings}
        >
          {props.data.map((slide, index) => {
            return <Slide key={index} data={slide} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MarketsSlider;
