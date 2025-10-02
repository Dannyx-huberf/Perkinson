import React from "react";
import NavBar from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";

const App = () => {
  return (
    <div className="w-[90%]  mx-auto">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default App;
