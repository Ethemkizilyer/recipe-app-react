import React from "react";
import Nava from "../components/navbar/Navi";
import Header from "../components/header/Header";
import Section from "../components/Section";
import { Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div style={{ background: "#cdeac0", height: "100vh" }}>
      <div style={{ background: "#cdeac0" }}>
        <Nava />
        <Header />
        <Section />
      </div>
    </div>
  );
};

export default Home;
