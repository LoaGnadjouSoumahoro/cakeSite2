import React from "react";
import Header from "../../components/header/Header";
import MainSection from "../../components/mainSection/MainSection";
import MainSide from "../../components/mainSide/MainSide";
import Article from "../../components/article/Article";

const HomePage = () => {
  return (
    <div className="layout">
      <div className="content1">
        <Header />
      </div>
      <div className="content2">
        <MainSection />
      </div>
      <div
        className="content3
      "
      >
        <MainSide />
      </div>
      <div
        className="content4
      "
      >
        <Article />
      </div>
    </div>
  );
};

export default HomePage;
