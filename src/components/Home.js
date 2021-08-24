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
import Carousel0 from "./Carousel0";
import Trending from "./Trending";
import FadeInSection from "./FadeInSection";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <FadeInSection>
        <Banner />
      </FadeInSection>
      <FadeInSection>
        <Carousel0 />
      </FadeInSection>
      <FadeInSection>
        <Matter />
      </FadeInSection>
      <FadeInSection>
        <Trending />
      </FadeInSection>
      <FadeInSection>
        <Carousel1 />
      </FadeInSection>
      <FadeInSection>
        <Furniture />
      </FadeInSection>
      <FadeInSection>
        <Carousel />
      </FadeInSection>
      <FadeInSection>
        <Review />
      </FadeInSection>
      <FadeInSection>
        <Team />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Home;
