import React from "react";
import Header from "../../components/header/Header";
import MainSection from "../../components/mainSection/MainSection";
import MainSide from "../../components/mainSide/MainSide";
import Article from "../../components/article/Article";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <MainSide />
      <Article />
    </div>
  );
};

export default HomePage;
