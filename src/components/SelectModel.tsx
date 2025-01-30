"use client";
import React, { useState } from "react";
import StepContent from "./AllSteps/StepContent";
import Devis from "./Steps/Devis";
import StepFour from "./AllSteps/StepFour";
import StepOne from "./AllSteps/StepOne";
import StepThree from "./AllSteps/StepThree";
import StepTwo from "./AllSteps/StepTwo";

const steps = [
  {
    title: "Étape I",
    description: "Sélectionnez votre appareil",
    component: <StepOne />,
  },
  {
    title: "Étape II",
    description: "Sélectionnez votre modèle",
    component: <StepTwo />,
  },
  {
    title: "Étape III",
    description: "Sélectionnez la ou les pannes",
    component: <StepThree />,
  },
  {
    title: "Étape IV",
    description: "Prenons rendez-vous",
    component: <StepFour />,
  },
];
export default function SelectModel() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const nextStep = () => {
    setSelectedStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  return (
    <main className="py-10">
      <div className="mb-8 text-center">
        <p className="font-bold text-orange-400">Téléphone & tablettes</p>
        <h2 className="lg:text-4xl text-3xl font-extrabold">
          Confiez-nous vos appareils en toute sérénité !
        </h2>
      </div>

      <ul className="flex gap-14 justify-center mt-12">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`cursor-pointer flex items-center ${
              selectedStep === index ? "text-orange-500" : "text-gray-700"
            }`}
            onClick={() => setSelectedStep(index)}
          >
            <input
              type="radio"
              name="step"
              checked={selectedStep === index}
              readOnly
              className="w-9 h-12 border-2 cursor-pointer"
            />
            <div className="ml-2 text-left">
              <p className="font-bold">{step.title}</p>
              <p className="text-xs">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <section className="flex justify-center mt-10">
        <StepContent
          title={steps[selectedStep].title}
          description={steps[selectedStep].description}
        >
          {React.cloneElement(steps[selectedStep].component, {
            nextStep,
          })}
        </StepContent>
        <Devis />
      </section>
    </main>
  );
}
