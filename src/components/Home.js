import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel1";
import Footer from "./Footer";
import Furniture from "./Furniture";
import NavigationBar from "./NavigationBar";
import Review from "./Review";
import Team from "./Team";
import Matter from "./Matter";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Banner />
      <Matter />
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
