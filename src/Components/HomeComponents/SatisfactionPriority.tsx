import shadowImage from "../../assets/myAssets/be-a-merchant-bg.png";
import ctaImage from "../../assets/myAssets/location-merchant.png";

const SatisfactionPriority = () => {
  return (
    <div
      className="bg-[#03373D] rounded-3xl 
      p-8 md:p-12 flex flex-col lg:flex-row
      items-center justify-between gap-10"
      style={{
        backgroundImage: `url(${shadowImage})`,
       backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Customer Satisfaction is Our Top Priority
        </h2>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Experience fast, secure, and reliable parcel delivery services
          tailored for individuals and businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#CAEB66] text-[#03373D] px-6 py-3 rounded-full hover:scale-105 transition">
            Become a Merchant
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#03373D] transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src={ctaImage}
          alt="Delivery"
          className="w-64 md:w-80 lg:w-96"
        />
      </div>
    </div>
  );
};

export default SatisfactionPriority;