import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/myAssets/banner/banner1.png";
import banner2 from "../../assets/myAssets/banner/banner2.png";
import banner3 from "../../assets/myAssets/banner/banner3.png";

const Slider = () => {
  return (
    <div className="mt-3">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
