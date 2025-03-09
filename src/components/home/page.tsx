import React from "react";
import Hero from "./first/hero";
import BestSeller from "./second/bestselleritems";
import FamousProduct from "./third/famousproduct";
import About from "./fourth/about";
import Feedback from "./fifth/feedback";
import News from "./six/news";
import Request from "./seven/request";

function HomePage() {
  return (
    <div>
      <Hero />
      <BestSeller />
      <FamousProduct />
      <About />
      <Feedback />
      <News />
      <Request />
    </div>
  );
}

export default HomePage;
