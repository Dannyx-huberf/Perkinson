import React from "react";
import Faq from "./pages/Faq";
import NavBar from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import Classes from "./pages/Classes";
import Client from "./pages/Client";

const App = () => {
  return (
    <div className="lg:w-full  mx-auto">
      <NavBar />
      <HeroSection />
      <Client />
      <Classes />
      <Faq />
    </div>
  );
};

export default App;
