import { iphoneModels } from "@/db/Apple";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowBigRightDashIcon } from "lucide-react";

const StepTwo = () => (
  <div className="container mx-auto">
    <div className="grid grid-cols-7 gap-4">
      {iphoneModels.map((model, index) => (
        <button
          key={index}
          className="bg-gray-200 hover:bg-orange-500 hover:text-white hover:font-bold text-black px-4 py-2 rounded-lg shadow-sm"
        >
          {model.name}
        </button>
      ))}
    </div>

    <div className="w-1/3 mx-auto mt-12">
      <Input type="text" placeholder="Saisissez une autre panne" />
      <div className="mx-auto gap-4 flex justify-center items-center mt-3">
        <Button variant="default">Retour</Button>
        <Button variant="default">
          Continuer <ArrowBigRightDashIcon />
        </Button>
      </div>
    </div>
  </div>
);

export default StepTwo;
