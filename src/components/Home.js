import React from "react";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel1";
import Footer from "./Footer";
import Furniture from "./Furniture";
import NavigationBar from "./NavigationBar";
import Review from "./Review";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Carousel1/>
      <Furniture />
      <Carousel />
      <Review />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
