import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowBigRightDashIcon } from "lucide-react";
import { useSelectElementStore } from "@/store/store";

const pannes = [
  { src: "/step-three/broke.png", label: "Écran cassé" },
  { src: "/step-three/batterie.png", label: "Batterie" },
  { src: "/step-three/charger.png", label: "Chargeur" },
  { src: "/step-three/water.png", label: "Désoxydation" },
  { src: "/step-three/camera.png", label: "Caméra" },
  { src: "/step-three/vitre.png", label: "Remplacer la vitre" },
];

export default function StepThree({ nextStep, prevStep }) {
  const { addElement } = useSelectElementStore();

  const handleSelectPanne = (panneLabel) => {
    addElement(panneLabel);
    nextStep(); // Passe à l'étape suivante
  };

  return (
    <div>
      <div className="flex justify-center gap-5 flex-wrap">
        {pannes.map((panne, index) => (
          <div key={index} className="flex flex-col justify-center text-center">
            <div
              className="bg-white hover:border-orange-600 hover:border-2 cursor-pointer w-32 h-32 rounded-3xl border 
            shadow-sm flex items-center justify-center"
              onClick={() => handleSelectPanne(panne.label)}
            >
              <Image
                src={panne.src}
                alt={panne.label}
                width={80}
                height={80}
                className="w-20 h-28 object-contain"
              />
            </div>
            <p className="mt-2 text-sm">{panne.label}</p>
          </div>
        ))}
      </div>

      <div className="w-1/3 mx-auto mt-12">
        <Input type="text" placeholder="Saisissez une autre panne" />
        <div className="mx-auto gap-4 flex justify-center items-center mt-3">
          <Button variant="default" onClick={prevStep}>
            Retour
          </Button>
          <Button variant="default" onClick={nextStep}>
            Continuer <ArrowBigRightDashIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
