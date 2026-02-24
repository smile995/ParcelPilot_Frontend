import trackingImg from "../../assets/myAssets/live-tracking.png";
import secureImg from "../../assets/myAssets/tiny-deliveryman.png";
import supportImg from "../../assets/myAssets/safe-delivery.png";

const OurQualities = () => {
  const qualities = [
    {
      img: trackingImg,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey with instant updates.",
    },
    {
      img: secureImg,
      title: "Safe & Secure Delivery",
      desc: "We ensure maximum safety of your parcels through careful handling, secure packaging, and trusted logistics operations.",
    },
    {
      img: supportImg,
      title: "24/7 Customer Support",
      desc: "Our dedicated support team is always ready to assist you anytime for a smooth delivery experience.",
    },
  ];

  return (
    <section className=" py-12 px-4 md:px-10 ">
      <div className=" mx-auto space-y-6 border-y border-[#03373D] py-12 px-4 md:px-10 border-dashed">

        {qualities.map((q, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl
            transition duration-300 p-6 flex flex-col md:flex-row
            items-center gap-6"
          >
            {/* Image */}
            <img
              src={q.img}
              alt={q.title}
              className="w-24 h-24 object-contain"
            />

            {/* Divider */}
            <div className="hidden md:block h-20 w-px bg-gray-200"></div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-[#03373D] mb-2">
                {q.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {q.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default OurQualities;