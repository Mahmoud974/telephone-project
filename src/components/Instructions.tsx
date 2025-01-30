import Image from "next/image";
import { Button } from "./ui/button";

// Composant Step pour éviter la répétition
const Step = ({ number, imageSrc, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={400}
      className="w-48 h-48 mb-6 object-cover rounded-lg"
    />
    <div className="flex items-center">
      <p className="lg:text-xl  text-lg font-bold text-gray-800">
        <span className="font-bold lg:text-3xl text-lg  mr-1 text-orange-600">
          {number} /
        </span>
        {title}
      </p>
    </div>
    <p className="mt-2 text-gray-600 w-80">{description}</p>
  </div>
);

export default function Instructions() {
  return (
    <section className="py-12 mt-24">
      <div className="container text-black mx-auto px-24">
        <div className="gap-4 relative">
          <p className="font-bold text-orange-400 text-center">
            Rapide et intuitif
          </p>
          <h2 className="text-4xl font-extrabold mt-4 text-center">
            Commencez dès maintenant !
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Step
            number="01"
            imageSrc="/instructions/1.jpg"
            title="Planifiez à votre rythme"
            description="Vous choisissez le moment et l’endroit qui vous arrangent. Que ce soit chez vous, au travail ou dans un café, nous nous adaptons à votre emploi du temps."
          />

          <Step
            number="02"
            imageSrc="/instructions/2.jpg"
            title="Un réparateur iRep se déplace"
            description="Vous choisissez le moment et l’endroit qui vous arrangent. Que ce soit chez vous, au travail ou dans un café, nous nous adaptons à votre emploi du temps."
          />

          <Step
            number="03"
            imageSrc="/instructions/3.jpg"
            title="Planifiez à votre rythme"
            description="Vous choisissez le moment et l’endroit qui vous arrangent. Que ce soit chez vous, au travail ou dans un café, nous nous adaptons à votre emploi du temps."
          />
        </div>

        <div className="flex justify-center mx-auto mt-8">
          <Button>Réserver un créneau</Button>
        </div>
      </div>
    </section>
  );
}
