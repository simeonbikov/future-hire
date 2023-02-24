import React from "react";
import Header from "./Header";
import "../Components/Hero.css";
import Footer from "./Footer";


function Layout(props) {
  return (
    <div>
      <Header />
      <div className="hero">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
