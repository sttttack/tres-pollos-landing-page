import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/FooterComponent";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
