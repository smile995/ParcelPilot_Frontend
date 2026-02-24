import HowItWorks from "../../Components/HomeComponents/HowItWorks";
import OurQualities from "../../Components/HomeComponents/OurQualities";
import OurServices from "../../Components/HomeComponents/OurServices";
import SalesBrandingLogos from "../../Components/HomeComponents/SalesBrandingLogos";
import SatisfactionPriority from "../../Components/HomeComponents/SatisfactionPriority";
import Slider from "../../Components/HomeComponents/Slider";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <HowItWorks />
      <OurServices />
      <SalesBrandingLogos />
      <OurQualities />
      <SatisfactionPriority />
    </div>
  );
};

export default HomePage;
