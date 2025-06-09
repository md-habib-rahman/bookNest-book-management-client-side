import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider
      animation="foldOutAnimation"
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      bullets={false}
      className="w-full"
      organicArrows={false}
    >
      <div className="w-full">
        <Slider1 />
      </div>
      <div className="w-full">
        <Slider2 />
      </div>
      {/* <div className="w-full">
        <BookClubBanner />
      </div> */}
    </AutoplaySlider>
  );
};

export default Banner;
