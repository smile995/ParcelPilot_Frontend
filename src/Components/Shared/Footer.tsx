import { FaFacebook } from "react-icons/fa";
import Logo from "./Logo";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="footer footer-horizontal footer-center flex-wrap
      bg-linear-to-br from-black via-gray-900 to-[#012f35]
      text-white px-4 sm:px-6 md:px-10 py-8 md:py-10
      my-6 rounded-4xl shadow-xl gap-6 md:gap-10"
    >
      <aside className="space-y-4 max-w-2xl w-full">
        <Logo />

        <p className="text-gray-300 leading-relaxed 
        text-xs sm:text-sm md:text-base px-2 md:px-0">
          Enjoy fast, reliable parcel delivery with real-time tracking and
          zero hassle. From personal packages to business shipments —
          we deliver on time, every time.
        </p>

        {/* Links */}
        <div
          className="grid grid-flow-col auto-cols-max
          justify-center gap-2 sm:gap-4 md:gap-6
          border-y py-3 md:py-4
          border-dashed border-[#0aa6b5]/40
          text-gray-300 text-xs sm:text-sm
          overflow-x-auto"
        >
          {["Services","Coverage","About Us","Pricing","Blog","Contact"]
            .map(link => (
              <a
                key={link}
                href="#"
                className="whitespace-nowrap
                hover:text-[#CAEB66]
                transition duration-300 hover:-translate-y-0.5"
              >
                {link}
              </a>
          ))}
        </div>
      </aside>

      <nav className="space-y-4">
        <div className="grid grid-flow-col gap-3 sm:gap-4 md:gap-5">
          {[FaFacebook, FaTwitter, FaYoutube, FaLinkedin].map(
            (Icon, i) => (
              <a
                key={i}
                className="p-2 sm:p-3 rounded-full bg-gray-800
                hover:bg-[#CAEB66] hover:text-black
                transition duration-300 transform hover:scale-110"
              >
                <Icon className="text-lg sm:text-xl md:text-2xl" />
              </a>
            )
          )}
        </div>

        <p className="text-gray-400 text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} — All rights reserved
        </p>
      </nav>
    </footer>
  );
};

export default Footer;