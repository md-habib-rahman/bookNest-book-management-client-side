import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={6000}
      stopOnHover={false}
      emulateTouch={true}
      swipeable={true}
      showIndicators={true}
      className="w-full"
    >
      <div>
        <Slider1 />
      </div>
      <div>
        <Slider2 />
      </div>
      <div>
        <Slider3 />
      </div>
    </Carousel>
  );
};

export default Banner;
