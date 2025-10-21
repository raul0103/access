import {Outlet} from "react-router";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function AuthLayout() {
  return (
    <main>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
