import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
