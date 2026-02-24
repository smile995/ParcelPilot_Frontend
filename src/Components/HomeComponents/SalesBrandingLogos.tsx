import Marquee from "react-fast-marquee";

import brand1 from "../../assets/myAssets/brands/amazon.png";
import brand2 from "../../assets/myAssets/brands/amazon_vector.png";
import brand3 from "../../assets/myAssets/brands/casio.png";
import brand4 from "../../assets/myAssets/brands/moonstar.png";
import brand5 from "../../assets/myAssets/brands/star.png";
import brand6 from "../../assets/myAssets/brands/start_people.png";

const SalesBrandingLogos = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <section className="py-16 ">
      <div className=" text-center mb-10 ">
        <h2 className="text-xl md:text-3xl font-bold text-[#03373D]">
          We've helped thousands of sales teams
        </h2>

        <p className="text-gray-600 mt-3">
          Trusted by growing businesses and leading brands across the country.
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {brands.map((logo, i) => (
          <div key={i} className="mx-2 md:mx-5">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-6 md:h-8 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SalesBrandingLogos;
