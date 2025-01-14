import { HeroParallax } from "@/components/ui/hero-parallax";
import { Spotlight } from "@/components/ui/spotlight";
import { products } from "@/conf/products";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div>
        <HeroParallax products={products}/>
      </div>
    </div>
  );
};

export default HomePage;
