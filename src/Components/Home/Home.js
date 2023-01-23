import React from "react";
import "./FontAwesome";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Success from "./Success/Success";
import Testimonials from "./Testimonials/Testimonials";
import Clients from "./Clients/Clients";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Header />
        <WhatWeDo />
        <Success />
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    </>
  );
}

export default Home;
