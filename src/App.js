import React, { useState, useCallback, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import ProjectsHeader from "./components/ProjectsHeader/ProjectsHeader";

import ProjectOne from "./components/ProjectOne/ProjectOne";
import ModalOne from "./components/ProjectOne/ModalOne";

import ProjectTwo from "./components/ProjectTwo/ProjectTwo";

import ProjectThree from "./components/ProjectThree/ProjectThree";
import ModalThree from "./components/ProjectThree/ModalThree";

import Spacer from "./components/Spacer/Spacer";

import ProjectFour from "./components/ProjectFour/ProjectFour";
import ModalFour from "./components/ProjectFour/ModalFour";

import Footer from "./components/Footer/Footer";
import "./portfolio.css";

const App = () => {
  const [showOne, setShowOne] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);

  const fxnShowOne = () => {
    setShowOne(!showOne);
  };
  const fxnShowThree = () => {
    setShowThree(!showThree);
  };
  const fxnShowFour = () => {
    setShowFour(!showFour);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showOne) setShowOne(false);
      if (e.key === "Escape" && showThree) setShowThree(false);
      if (e.key === "Escape" && showFour) setShowFour(false);
    },
    [showOne, setShowOne, showThree, setShowThree, showFour, setShowFour]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      <Navbar />
      <Header />
      <Intro id="about-me" />
      <ProjectsHeader />
      <ProjectOne fxnShowOne={fxnShowOne} />
      <ProjectTwo />
      <ProjectThree fxnShowThree={fxnShowThree} />
      <Spacer />
      <ProjectFour fxnShowFour={fxnShowFour} />
      <Footer />
      {showOne ? <ModalOne showOne={showOne} fxnShowOne={fxnShowOne} /> : null}

      {showThree ? (
        <ModalThree showThree={showThree} fxnShowThree={fxnShowThree} />
      ) : null}
      {showFour ? (
        <ModalFour showFour={showFour} fxnShowFour={fxnShowFour} />
      ) : null}
    </>
  );
};

export default App;
