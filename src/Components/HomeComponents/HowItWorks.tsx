import {
  FaTruck,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: FaTruck,
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: FaBoxOpen,
      title: "Package Handling",
      desc: "Secure packaging and careful handling ensure your parcel stays safe.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Live Tracking",
      desc: "Track your parcel in real time with our smart delivery system.",
    },
    {
      icon: FaCheckCircle,
      title: "Safe Delivery",
      desc: "Fast, reliable delivery straight to your doorstep without hassle.",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-10 lg:px-16 ">
    
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#03373D]">
          How It Works
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-3 ">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-md 
                hover:shadow-xl transition duration-300 
                hover:-translate-y-1"
            >
              <Icon className="text-3xl text-[#03373D] mb-4" />

              <h3 className="font-semibold text-lg text-[#03373D] mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
