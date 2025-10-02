import React from "react";
import Client from "./pages/Client";
import NavBar from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";

const App = () => {
  return (
    <div className="w-[90%]  mx-auto">
      <NavBar />
      <HeroSection />
      <Client />
    </div>
  );
};

export default App;
