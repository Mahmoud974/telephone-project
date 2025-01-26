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
              <h1 className="text-7xl text-center mx-auto  font-extrabold">
                Smartfix répare
                <br /> votre smartphone
              </h1>
              <p className="mt-2 text-2xl text-center">
                Bénéficiez d’un service rapide, fiable & garanti pour
                <br /> revitaliser votre téléphone.
              </p>
              <ul className="mt-3 flex justify-center space-x-6">
                <li className="flex items-center text-center">
                  <CircleCheckBig className="text-orange-500 mr-3 text-3xl" />
                  Déplacement offert
                </li>
                <li className="flex items-center text-center">
                  <CircleCheckBig className="text-orange-500 mr-3 text-3xl" />
                  Garantie 3 mois
                </li>
                <li className="flex items-center text-center">
                  <CircleCheckBig className="text-orange-500 mr-3 text-3xl" />
                  Pièces de qualité
                </li>
              </ul>
              <div className="flex text-center mx-auto justify-center gap-4">
                <button className="cursor-pointer flex items-center mt-6 px-8 py-3 bg-stone-700 hover:bg-orange-600 text-white text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition-transform">
                  <Wrench />
                  <p className="ml-2">Réparer mon iPhone</p>
                </button>
                <button className="cursor-pointer flex items-center mt-6 px-8 py-3 bg-orange-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-stone-700 hover:scale-105 transition-transform">
                  <Phone />
                  <p className="ml-2">06.12.45.78.90</p>
                </button>
              </div>
            </div>

            {/* <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <Image
                src="/mobile.png"
                alt="Smartphone"
                width={400}
                height={400}
                className="w-80 md:w-96 rounded-lg"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
