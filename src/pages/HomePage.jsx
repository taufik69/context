import React from "react";
import Header from "../Components/Common/Header";
import { UseAxios } from "../hooks/UseAxios";

const HomePage = () => {
  UseAxios();
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
