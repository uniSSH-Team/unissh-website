import { Outlet, Link } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
