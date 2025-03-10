import React from "react";
import FamousProduct from "./third/famousproduct";
import About from "./fourth/about";
import Feedback from "./fifth/feedback";
import News from "./six/news";
import Request from "./seven/request";
import MainComponent from "../maincomponent/main";
import FeedMainComponent from "../feedmaincomponent/feedmaincomponent";

function HomePage() {
  return (
    <div>
      <MainComponent/>
      <FamousProduct />
      <About />
      <FeedMainComponent/>
      {/* <Feedback /> */}
      <News />
      <Request />
    </div>
  );
}

export default HomePage;
