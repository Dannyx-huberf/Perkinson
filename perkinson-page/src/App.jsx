import React from "react";
import Faq from "./pages/Faq";
import NavBar from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import Classes from "./pages/Classes";
import Client from "./pages/Client";
import HeroNav from "./components/nav-menu/HeroNav";
import StackCard from "./components/nav-menu/StackCard";
import WhySection from "./components/WhySection";
import Perks from "./components/Perks";
import Reviews from "./components/Reviews";
import Perkinson from "./pages/Perkinson";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="lg:w-full  mx-auto">
      <NavBar />
      <HeroSection />
      <div className="flex flex-col items-center">
        <nav className="w-full flex justify-center py-6">
          <HeroNav />
        </nav>

        <div className="w-full flex justify-center mt-4">
          <StackCard />
        </div>
      </div>
      <Client />
      <Classes />
      <WhySection />
      <Perks />
      <Reviews />
      <Faq />
      <Perkinson />
      <Footer />
    </div>
  );
};

export default App;
