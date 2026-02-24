import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";
import sectionImage from "../../assets/myAssets/customer-top.png";

const reviews = [
  {
    id: 1,
    userName: "John Doe",
    review: "Smooth delivery and polite staff.I love it!.",
    user_photoURL: "https://randomuser.me/api/portraits/men/10.jpg",
    profession: "E-commerce Seller",
  },
  {
    id: 2,
    userName: "Jane Smith",
    review: "Took a bit longer than expected, but okay overall.",
    user_photoURL: "https://randomuser.me/api/portraits/women/25.jpg",
    profession: "Online Store Owner",
  },
  {
    id: 3,
    userName: "Alex Brown",
    review: "Excellent service! Fast and secure.",
    user_photoURL: "https://randomuser.me/api/portraits/men/34.jpg",
    profession: "Business Owner",
  },
  {
    id: 4,
    userName: "Lisa White",
    review: "Very responsive and professional.",
    user_photoURL: "https://randomuser.me/api/portraits/women/12.jpg",
    profession: "Retail Merchant",
  },
  {
    id: 5,
    userName: "David Lee",
    review: "Late delivery and no updates. Disappointed.",
    user_photoURL: "https://randomuser.me/api/portraits/men/19.jpg",
    profession: "Shop Owner",
  },
  {
    id: 6,
    userName: "Nina Khan",
    review: "Superb experience! Highly recommended.",
    user_photoURL: "https://randomuser.me/api/portraits/women/8.jpg",
    profession: "Fashion Seller",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 md:px-10 ">
      <div>
        {/* Top Image */}
        <div className="flex justify-center mb-6">
          <img src={sectionImage} alt="Customers" className="w-20 md:w-1/5 " />
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-xl md:text-3xl font-bold text-[#03373D]">
            What our customers are saying
          </h2>

          <p className="text-gray-600 mt-4 md:max-w-xl w-full mx-auto">
            Trusted by thousands for fast, secure, and reliable delivery. We
            focus on customer satisfaction with every shipment.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3500 }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="flex py-4">
              <div
                className="bg-white rounded-2xl p-5 flex flex-col justify-between flex-1 hover:-translate-y-1 hover:scale-[1.01]
    transition-all duration-300 group overflow-visible"
              >
                {/* Quote Icon */}
                <FaQuoteLeft
                  className="text-2xl text-[#03373D]/80 mb-4 group-hover:text-[#03373D] transition"
                />

                {/* Review */}
                <p className="text-gray-600 leading-relaxed mb-2 grow">
                  {item.review}
                </p>

                {/* Divider */}
                <div className="border-t border-dashed border-[#03373D]/50 my-4"></div>

                {/* Reviewer */}
                <div className="flex items-center gap-2">
                  <img
                    src={item.user_photoURL}
                    alt={item.userName}
                    className="w-12 h-12 rounded-full object-cover
        group-hover:scale-105 transition"
                  />

                  <div>
                    <h4 className="font-semibold text-[#03373D]">
                      {item.userName}
                    </h4>
                    <p className="text-sm text-gray-500">{item.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
