"use client";
import Image from "next/image";
import React, { useState } from "react";
import Devis from "./Steps/Devis";

// Définition des types pour le composant StepContent
interface StepContentProps {
  title: string;
  description: string;
  content: React.ReactNode;
}

const StepContent: React.FC<StepContentProps> = ({
  title,
  description,
  content,
}) => (
  <div className="text-black px-6 flex flex-col justify-between h-[400px] w-[1100px]">
    <div className="gap-4 relative">
      <p className="font-bold text-orange-400 text-center">
        {title} - {description}
      </p>
      <h2 className="text-4xl font-extrabold mt-4">{title}</h2>
      <div className="text-lg mt-4 overflow-auto">{content}</div>
    </div>
  </div>
);

interface Device {
  src: string;
  alt: string;
  label: string;
}

interface Step {
  title: string;
  description: string;
  content: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Étape I",
    description: "Sélectionnez votre appareil",
    content: (
      <div className="flex justify-center">
        <ul className="grid grid-cols-5 gap-6 justify-items-center">
          {[
            { src: "/mobile-img/iphone.png", alt: "iPhone", label: "iPhone" },
            {
              src: "/mobile-img/samsung.png",
              alt: "Samsung",
              label: "Samsung",
            },
            { src: "/mobile-img/sony.png", alt: "Sony", label: "Sony" },
            { src: "/mobile-img/huawai.png", alt: "Huawei", label: "Huawei" },
            {
              src: "/mobile-img/microsoft.png",
              alt: "Microsoft",
              label: "Microsoft",
            },
            { src: "/mobile-img/lg.png", alt: "LG", label: "LG" },
            { src: "/mobile-img/xiaomi.png", alt: "Xiaomi", label: "Xiaomi" },
            {
              src: "/mobile-img/one-plus.png",
              alt: "OnePlus",
              label: "OnePlus",
            },
            { src: "/mobile-img/other.png", alt: "Other", label: "Other" },
          ].map((device: Device, index: number) => (
            <li
              key={index}
              className="bg-orange-500 hover:bg-orange-700 cursor-pointer text-white px-6 py-3 rounded-xl shadow-xl flex flex-col items-center justify-between h-32 w-32"
            >
              <Image
                src={device.src}
                alt={device.alt}
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <p className="mt-2 text-xs">{device.label}</p>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Étape II",
    description: "Sélectionnez votre modèle",
    content: <div className="max-w-2xl"> </div>,
  },
  {
    title: "Étape III",
    description: "Sélectionnez les réparations",
    content: (
      <div>
        <p>Indiquez les réparations nécessaires pour votre appareil.</p>
        <ul className="list-disc list-inside mt-4">
          <li>Écran cassé</li>
          <li>Batterie défectueuse</li>
          <li>Problème de caméra</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Étape IV",
    description: "Indiquez vos informations",
    content: (
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-left font-bold mb-1">Nom :</label>
          <input
            type="text"
            placeholder="Entrez votre nom"
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-left font-bold mb-1">Email :</label>
          <input
            type="email"
            placeholder="Entrez votre email"
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-left font-bold mb-1">Adresse :</label>
          <input
            type="text"
            placeholder="Entrez votre adresse"
            className="w-full border rounded-lg p-2"
          />
        </div>
      </form>
    ),
  },
];

export default function SelectModel() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <main className="py-10">
      <div className="mb-8 text-center md:text-left gap-4 relative">
        <p className="font-bold text-center text-orange-400">
          Téléphone & tablettes
        </p>
        <h2 className="text-4xl text-center font-extrabold">
          Confiez-nous vos appareils
          <br /> en toute sérénité !
        </h2>
      </div>
      <ul className="flex gap-14 justify-center mt-12">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center text-center cursor-pointer ${
              selectedStep === index ? "text-orange-500" : "text-gray-700"
            }`}
            onClick={() => setSelectedStep(index)}
          >
            <input
              type="radio"
              name="step"
              id={`step-${index}`}
              className="w-9 h-12 border-2 cursor-pointer"
              checked={selectedStep === index}
              readOnly
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
          content={steps[selectedStep].content}
        />
        <Devis />
      </section>
    </main>
  );
}
