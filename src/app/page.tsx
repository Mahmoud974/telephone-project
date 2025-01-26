import { AccordionQuestions } from "@/components/AccordionQuestions";
import Footer from "@/components/Footer";

import HeroSection from "@/components/Home";
import Instructions from "@/components/Instructions";
import Map from "@/components/Map";
import SecondSection from "@/components/SecondSection";
import SelectModel from "@/components/SelectModel";
import ServicesInfo from "@/components/Services";
import React from "react";

export default function page() {
  return (
    <main className=" ">
      <HeroSection />
      <ServicesInfo />
      <SecondSection />
      <SelectModel />
      <Instructions />
      <AccordionQuestions />
      <Map />

      <Footer />
    </main>
  );
}
