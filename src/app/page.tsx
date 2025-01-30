import { AccordionQuestions } from "@/components/AccordionQuestions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import HeroSection from "@/components/Home";
import Instructions from "@/components/Instructions";
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

      <Contact />

      <Footer />
    </main>
  );
}
