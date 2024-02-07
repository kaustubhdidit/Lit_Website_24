import React from "react";
import Footer from "./Components/Aditya_Work/Footer/Footer";
import Header from "./Components/Aditya_Work/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
