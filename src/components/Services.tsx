import Image from "next/image";
import React from "react";

const services = [
  {
    imageSrc: "/services/contrat.png",
    title: "Garantie de 3 mois",
    description: ["Garantie 90 jours.", "Problème ? On le règle."],
  },
  {
    imageSrc: "/services/truck.png",
    title: "Déplacement gratuit",
    description: ["Pas de frais supplémentaires."],
  },
  {
    imageSrc: "/services/screw.png",
    title: "Pièces de qualité",
    description: ["Pièces officielles.", "Testées et garanties."],
  },
  {
    imageSrc: "/services/price.png",
    title: "Prix clairs",
    description: ["Devis avant réparation.", "Pas de frais cachés."],
  },
  {
    imageSrc: "/services/bulle.png",
    title: "À votre écoute",
    description: ["Contactez-nous par téléphone."],
  },
];

const ServicesInfo: React.FC = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="mb-8 text-center md:text-left gap-4 relative">
        <p className="font-bold text-center text-orange-400">
          Téléphone & tablettes
        </p>
        <h2 className="text-4xl text-center font-extrabold">
          Confiez-nous vos appareils
          <br /> en toute sérénité !
        </h2>
      </div>
      <ul className="flex flex-wrap items-center  justify-center gap-12">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex flex-col justify-center items-center text-center"
          >
            <Image
              src={service.imageSrc}
              alt={service.title}
              width={64}
              height={64}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">{service.title}</h2>
            <ul className="w-48">
              {service.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesInfo;
