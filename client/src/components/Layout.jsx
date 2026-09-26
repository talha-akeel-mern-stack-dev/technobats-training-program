import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import BottomBar from "./BottomBar";

const Layout = () => {
  return (
    <>
      <div className="hidden md:block"><TopBar /></div>
      <Header />
      <main className="container-fluid mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
};

export default Layout;