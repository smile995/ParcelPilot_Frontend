import {
  FaShippingFast,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillWave,
  FaHandshake,
  FaUndo,
} from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: FaShippingFast,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in major cities. Express delivery available within 4–6 hours in selected areas.",
    },
    {
      icon: FaGlobeAsia,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring fast and reliable service.",
    },
    {
      icon: FaWarehouse,
      title: "Fulfillment Solution",
      description:
        "Inventory management, order processing, packaging, and after-sales support for businesses.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Cash on Home Delivery",
      description:
        "Secure cash-on-delivery service available nationwide with full safety assurance.",
    },
    {
      icon: FaHandshake,
      title: "Corporate Logistics",
      description:
        "Customized logistics support including warehouse and inventory management.",
    },
    {
      icon: FaUndo,
      title: "Parcel Return",
      description:
        "Easy product return or exchange facility with reverse logistics support.",
    },
  ];

  return (
    <section className="bg-[#03373D] py-10 px-4 md:px-10 rounded-4xl">
      <div className=" text-center">

        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>

        <p className="text-gray-200 max-w-xl mx-auto mb-12">
          Reliable logistics solutions designed to make parcel delivery
          faster, safer, and more convenient for individuals and businesses.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="bg-white hover:bg-[#CAEB66]
                transition duration-300 rounded-3xl p-5 transform hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div
                  className="mx-auto mb-5 flex items-center justify-center
                  w-16 h-16 rounded-full bg-[#03373D]/10"
                >
                  <Icon className="text-2xl text-[#03373D]" />
                </div>

                <h3 className="font-semibold text-lg text-[#03373D] mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurServices;