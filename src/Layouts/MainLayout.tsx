import { Outlet } from "react-router";
import Navber from "../Components/Shared/Navber";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
