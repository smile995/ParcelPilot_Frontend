
import HowItWorks from "../../Components/HomeComponents/HowItWorks";
import OurQualities from "../../Components/HomeComponents/OurQualities";
import OurServices from "../../Components/HomeComponents/OurServices";
import SalesBrandingLogos from "../../Components/HomeComponents/SalesBrandingLogos";
import SatisfactionPriority from "../../Components/HomeComponents/SatisfactionPriority";
import Slider from "../../Components/HomeComponents/Slider";
import TestimonialsSection from "../../Components/HomeComponents/TestimonialsSection";
import FAQSection from "../../Components/HomeComponents/FAQSection";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <HowItWorks />
      <OurServices />
      <SalesBrandingLogos />
      <OurQualities />
      <SatisfactionPriority />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
