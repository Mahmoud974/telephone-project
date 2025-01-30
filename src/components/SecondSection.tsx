import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

export default function SecondSection() {
  return (
    <>
      <section className="">
        <div className="text-black container mt-20  mx-auto flex flex-col md:flex-row items-center px-6 relative z-10 justify-center">
          <div className="md:w-1/2 text-center md:text-left gap-4 relative">
            <p className="font-bold text-orange-400">Téléphone & tablettes</p>
            <h2 className="lg:text-4xl text-3xl lg:w-3/4 font-extrabold">
              Confiez-nous vos appareils en toute sérénité !
            </h2>
            <p className="mt-2 text-lg lg:w-4/5">
              Écran cassé, vitre fissurée ou batterie défectueuse ? Faites
              confiance à SmartFix pour réparer et protéger vos appareils
              (iPhone, Samsung, Xiaomi…) dans l’un de nos magasins !
            </p>
            <p className="mt-2 text-lg lg:w-4/5">
              Nos experts réparent votre téléphone sur place et en un temps
              record, pour qu’il retrouve son état d’origine. Tous les
              composants utilisés sont soigneusement testés avant et après
              chaque réparation, garantissant fiabilité et qualité.
            </p>
            <ul className="mt-3 lg:space-y-4 text-lg text-center">
              <li className="flex items-center">
                <CircleCheckBig className="text-orange-500 mr-3" />
                <p className="text-md">
                  Tarifs réduits pour les petites budgets
                </p>
              </li>
              <li className="flex items-center">
                <CircleCheckBig className="text-orange-500 mr-3" />
                <p className="text-md">Réparation EXPRESS en 1 heure</p>
              </li>
              <li className="flex items-center">
                <CircleCheckBig className="text-orange-500 mr-3" />
                <p className="text-md">
                  Garantie 3 mois sur toutes nos réparations
                </p>
              </li>
            </ul>
          </div>

          <div className="relative lg:flex hidden">
            <Image
              src="/repair.jpg"
              alt="Smartphone"
              width={400}
              height={400}
              className="w-96   rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
