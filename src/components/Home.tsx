import { CircleCheckBig, Phone, Wrench } from "lucide-react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover h-[700px] bg-center"
        style={{
          backgroundImage: "url('/bg-home1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "#333",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-white container mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">
            <div className="md:w-1/2 text-center md:text-left mx-auto">
              <h1 className="lg:text-7xl text-4xl font-extrabold text-center">
                Smartfix répare
                <br /> votre smartphone
              </h1>
              <p className="mt-2 lg:text-2xl text-lg">
                Bénéficiez d’un service rapide, fiable & garanti pour
                revitaliser votre téléphone.
              </p>
              <ul className="mt-3 flex mx-auto lg:flex-row flex-col items-center text-center justify-center lg:space-x-6 space-y-2 lg:space-y-0">
                <li className="flex items-center justify-center">
                  <CircleCheckBig className="text-orange-500 mr-2 text-xl lg:text-3xl" />
                  Déplacement offert
                </li>
                <li className="flex items-center justify-center">
                  <CircleCheckBig className="text-orange-500 mr-2 text-xl lg:text-3xl" />
                  Garantie 3 mois
                </li>
                <li className="flex items-center justify-center">
                  <CircleCheckBig className="text-orange-500 mr-2 text-xl lg:text-3xl" />
                  Pièces de qualité
                </li>
              </ul>

              {/* Boutons adaptés aux mobiles */}
              <div className="flex flex-col lg:flex-row w-full text-center mx-auto justify-center gap-4">
                <button className="w-full lg:w-auto flex items-center justify-center mt-6 px-5 py-2 bg-stone-700 hover:bg-orange-600 text-white text-sm lg:text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition-transform">
                  <Wrench />
                  <p className="ml-2">Réparer mon iPhone</p>
                </button>
                <button className="w-full lg:w-auto flex items-center justify-center mt-6 px-5 py-2 bg-orange-600 text-white text-sm lg:text-lg font-medium rounded-lg shadow-lg hover:bg-stone-700 hover:scale-105 transition-transform">
                  <Phone />
                  <p className="ml-2">06.12.45.78.90</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
