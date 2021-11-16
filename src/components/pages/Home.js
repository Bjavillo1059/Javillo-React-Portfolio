import React from "react";
import "../../App.css";
import Cards from "../Cards";
import FooterBlock from "../FooterBlock";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <FooterBlock />
    </>
  );
}

export default Home;
