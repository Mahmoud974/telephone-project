"use client";
import Image from "next/image";
import React, { useState } from "react";
import Devis from "./Steps/Devis";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { ArrowBigRightDashIcon } from "lucide-react";

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

      <div className="text-lg mt-8 overflow-auto">{content}</div>
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
    content: (
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {[
            "iPhone 15 Pro Max",
            "iPhone 15 Pro",
            "iPhone 15 Plus",
            "iPhone 15",
            "iPhone 14 Pro Max",
            "iPhone 14 Pro",
            "iPhone 14 Plus",
            "iPhone 14",
            "iPhone 13 Pro Max",
            "iPhone 13 Pro",
            "iPhone 13 mini",
            "iPhone 13",
            "iPhone 12 Pro Max",
            "iPhone 12 Pro",
            "iPhone 12 mini",
            "iPhone 12",
            "iPhone 11 Pro Max",
            "iPhone 11 Pro",
            "iPhone 11",
            "iPhone Xs Max",
            "iPhone Xs",
            "iPhone X",
            "iPhone XR",
            "iPhone 8 Plus",
            "iPhone 8",
            "iPhone 7 Plus",
            "iPhone 7",
            "iPhone 6 Plus",
            "iPhone 6s Plus",
            "iPhone 6s",
            "iPhone 6",
            "iPhone SE (2022)",
            "iPhone SE (2020)",
            "iPhone SE (2016)",
            "iPhone 5s",
            "iPhone 5c",
            "iPhone 5",
            "iPhone 4s",
            "iPhone 4",
          ].map((model, index) => (
            <button
              key={index}
              className="bg-gray-200 hover:bg-gray-400 text-black px-4 py-2 rounded-lg shadow-sm"
            >
              {model}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <input
            type="text"
            placeholder="Saisissez ici un autre modèle"
            className="w-full border rounded-lg p-2"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Étape III",
    description: "Sélectionnez la ou les pannes",
    content: (
      <div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col justify-center text-center">
            <div className="bg-white w-32 h-32 rounded-3xl border shadow-sm flex items-center justify-center ">
              <Image
                src="/step-three/broke.png"
                alt="Panne camera"
                width={400}
                height={40}
                className="w-20 h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-sm">Écran cassé</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="bg-white w-32 h-32 rounded-3xl border shadow-sm flex items-center justify-center ">
              <Image
                src="/step-three/batterie.png"
                alt="Panne camera"
                width={400}
                height={40}
                className="w-20 h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-sm">Écran cassé</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="bg-white w-32 h-32 rounded-3xl border shadow-sm flex items-center justify-center ">
              <Image
                src="/step-three/charger.png"
                alt="Panne camera"
                width={400}
                height={40}
                className="w-20 h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-sm">Chargeur</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="bg-white w-32 h-32 rounded-3xl border shadow-sm flex items-center justify-center ">
              <Image
                src="/step-three/water.png"
                alt="Panne camera"
                width={400}
                height={40}
                className="w-20 h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-sm">Desoxydation</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="bg-white w-32 h-32 rounded-3xl border shadow-sm flex items-center justify-center ">
              <Image
                src="/step-three/camera.png"
                alt="Panne camera"
                width={400}
                height={40}
                className="w-20 h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-sm">Camera</p>
          </div>
          <div>
            <div className="bg-white w-32 h-32 rounded-3xl border shadow-sm flex items-center justify-center ">
              <Image
                src="/step-three/vitre.png"
                alt="Panne camera"
                width={400}
                height={40}
                className="w-20 h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-sm">Remplacer la vitre</p>
          </div>
        </div>
        <div className="w-1/3 mx-auto mt-12">
          <Input type="text" placeholder="Saisissez une autre panne" />
          <div className="mx-auto gap-4  flex justify-center items-center mt-3">
            <Button variant="default">Retour</Button>
            <Button variant="default">
              Continuer <ArrowBigRightDashIcon />{" "}
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Étape IV",
    description: "Prenons rendez-vous",
    content: (
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-gray-600 mb-4">
          Ces informations resteront confidentielles et seront uniquement
          utilisées afin de répondre à votre demande.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Votre nom
            </label>
            <input
              type="text"
              value="Isaac Moussa"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Votre prénom
            </label>
            <input
              type="text"
              value="sd"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Votre n° de téléphone
            </label>
            <input
              type="text"
              value="0661794271"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Votre email
            </label>
            <input
              type="email"
              value="manuscrit9rt1@gmail.com"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Code postal
            </label>
            <input
              type="text"
              value="26080"
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="atelier" className="mr-2" />
          <label htmlFor="atelier" className="text-gray-700">
            Vous préférez nous apporter votre appareil à notre atelier au{" "}
            <strong>1 rue des Boucherie à BordDesoxydationx</strong> ?
          </label>
        </div>
        <div className="mt-6">
          <h3 className="text-center font-medium">
            Comment préférez-vous être recontacté ?
          </h3>
          <div className="flex justify-center gap-4 mt-2">
            <button className="bg-gray-200 hover:bg-gray-400 text-black px-4 py-2 rounded-lg shadow-sm">
              Par téléphone
            </button>
            <button className="bg-gray-200 hover:bg-gray-400 text-black px-4 py-2 rounded-lg shadow-sm">
              Par email
            </button>
            <button className="bg-gray-200 hover:bg-gray-400 text-black px-4 py-2 rounded-lg shadow-sm">
              Peu importe
            </button>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Avant de terminer, y a-t-il autre chose que nous devrions savoir ?
          </label>
          <textarea
            className="w-full border rounded-lg p-2 mt-2"
            rows="3"
          ></textarea>
        </div>
      </div>
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
