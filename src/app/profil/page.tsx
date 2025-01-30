"use client";
import HeroSection from "@/components/Home";
import React, { useState } from "react";

export default function Page() {
  const [selectedContent, setSelectedContent] = useState<string>("Bienvenue");

  const contentMap: { [key: string]: string } = {
    "Historique des commandes":
      "Voici la liste de vos commandes passées et leur statut.",
    "Temps de préparation":
      "Le temps de préparation varie selon la complexité de la réparation.",
    "Facture & Devis": "Accédez à vos factures et demandez un devis en ligne.",
  };

  return (
    <main className="min-h-screen">
      <HeroSection />

      <nav className=" flex  justify-center mt-10">
        <ul className="flex max-w-3xl px-8   justify-center gap-8 bg-gray-100 py-4 shadow-md rounded-lg mx-10">
          {Object.keys(contentMap).map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition font-medium px-4 py-2 rounded-lg ${
                selectedContent === contentMap[item]
                  ? "bg-orange-500 text-white"
                  : "hover:text-orange-500"
              }`}
              onClick={() => setSelectedContent(contentMap[item])}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <section className="max-w-4xl mx-auto mt-12 p-6  rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {selectedContent !== "Bienvenue"
            ? Object.keys(contentMap).find(
                (key) => contentMap[key] === selectedContent
              )
            : "Bienvenue"}
        </h2>
        <p className="text-gray-600 text-center mt-2">{selectedContent}</p>
      </section>
    </main>
  );
}
