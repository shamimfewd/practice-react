import { Outlet } from "react-router-dom";
import Footer from "../Shired/Footer";
import Header from "../Shired/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
