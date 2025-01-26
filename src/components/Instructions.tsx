import Image from "next/image";
import { Button } from "./ui/button";

// components/Instructions.jsx
export default function Instructions() {
  return (
    <section className="py-12  ">
      <div className="container   text-black mx-auto px-24">
        <div className="gap-4 relative">
          <p className="font-bold text-orange-400 text-center">
            Rapide et intuitif
          </p>
          <h2 className="text-4xl font-extrabold mt-4 text-center">
            Commencez dès maintenant !
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/instructions/1.jpg"
              alt="Smartphone"
              width={400}
              height={400}
              className="w-48 h-48 mb-6 object-cover  rounded-lg"
            />
            <div className="flex items-center">
              <p className="font-bold text-3xl mr-1 text-orange-600">01 /</p>

              <p className="  text-xl font-bold text-gray-800">
                Planifiez à votre rythme
              </p>
            </div>
            <p className="mt-2 text-gray-600 w-80">
              Vous choisissez le moment et l’endroit qui vous arrangent. Que ce
              soit chez vous, au travail ou dans un café, nous nous adaptons à
              votre emploi du temps.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/instructions/2.jpg"
                alt="Smartphone"
                width={400}
                height={400}
                className="w-48 h-48 mb-6 object-cover  rounded-lg"
              />
              <div className="flex items-center">
                <p className="font-bold text-3xl mr-1 text-orange-600">02 /</p>

                <p className="  text-xl font-bold text-gray-800">
                  Un réparateur iRep se déplace
                </p>
              </div>
              <p className="mt-2 text-gray-600 w-80">
                Vous choisissez le moment et l’endroit qui vous arrangent. Que
                ce soit chez vous, au travail ou dans un café, nous nous
                adaptons à votre emploi du temps.
              </p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/instructions/3.jpg"
                alt="Smartphone"
                width={400}
                height={400}
                className="w-48 h-48 mb-6 object-cover  rounded-lg"
              />
              <div className="flex items-center">
                <p className="font-bold text-3xl mr-1 text-orange-600">03 /</p>

                <p className="  text-xl font-bold text-gray-800">
                  Planifiez à votre rythme
                </p>
              </div>
              <p className="mt-2 text-gray-600 w-80">
                Vous choisissez le moment et l’endroit qui vous arrangent. Que
                ce soit chez vous, au travail ou dans un café, nous nous
                adaptons à votre emploi du temps.
              </p>
            </div>
          </div>
          <div className=" ">
            <Button>Réserver un créneau</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
