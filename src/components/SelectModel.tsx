"use client";
import { useSelectElementStore } from "@/store/store";
import { Pencil } from "lucide-react";
import { useState } from "react";

export default function Devis() {
  const { elementsSmartphone } = useSelectElementStore();

  const [reparations, setReparations] = useState({
    reparation1: "",
    reparation2: "",
    reparation3: "",
  });
  const [total, setTotal] = useState(0);

  const optionsReparations = [
    { label: "Écran cassé", prix: 100 },
    { label: "Batterie défectueuse", prix: 50 },
    { label: "Problème de caméra", prix: 80 },
  ];

  const handleReparationChange = (key, value) => {
    const newReparations = { ...reparations, [key]: value };
    setReparations(newReparations);

    // Calculer le total
    const totalPrice = Object.values(newReparations)
      .map((rep) => {
        const opt = optionsReparations.find((o) => o.label === rep);
        return opt ? opt.prix : 0;
      })
      .reduce((acc, curr) => acc + curr, 0);

    setTotal(totalPrice);
  };

  return (
    <div className="border rounded-xl shadow-lg p-6 w-full max-w-lg mx-auto bg-white">
      <h3 className="text-xl font-bold mb-6">Devis</h3>

      {/* Marque */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">Marque :</p>
        <div className="flex justify-between items-center">
          <p>{elementsSmartphone[0]}</p>
          <Pencil className="w-5" />
        </div>
      </div>

      {/* Modèle */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">Modèle :</p>
        <div className="flex justify-between items-center">
          <p>{elementsSmartphone[1]}</p>
          <Pencil className="w-5" />
        </div>
      </div>

      {/* Pannes */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">Les pannes :</p>
        <div className="flex justify-between items-center">
          <p>{elementsSmartphone[2]}</p>
          <Pencil className="w-5" />
        </div>
      </div>

      {/* Réparations */}
      <div className="mb-6">
        <label className="text-sm text-gray-600">Réparations :</label>

        {/* Ligne 1 */}
        <div className="mt-2">
          <select
            value={reparations.reparation1}
            onChange={(e) =>
              handleReparationChange("reparation1", e.target.value)
            }
            className="w-full border rounded-md p-2 text-gray-800 mb-2"
          >
            <option value="">Sélectionnez une réparation</option>
            {optionsReparations.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label} - {option.prix} €
              </option>
            ))}
          </select>
        </div>

        {/* Ligne 2 */}
        <div className="mt-2">
          <select
            value={reparations.reparation2}
            onChange={(e) =>
              handleReparationChange("reparation2", e.target.value)
            }
            className="w-full border rounded-md p-2 text-gray-800 mb-2"
          >
            <option value="">Sélectionnez une réparation</option>
            {optionsReparations.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label} - {option.prix} €
              </option>
            ))}
          </select>
        </div>

        {/* Ligne 3 */}
        <div className="mt-2">
          <select
            value={reparations.reparation3}
            onChange={(e) =>
              handleReparationChange("reparation3", e.target.value)
            }
            className="w-full border rounded-md p-2 text-gray-800"
          >
            <option value="">Sélectionnez une réparation</option>
            {optionsReparations.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label} - {option.prix} €
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Total */}
      <div>
        <p className="font-bold text-lg">
          Total : <span className="text-black">{total.toFixed(2)} €</span>
        </p>
      </div>
    </div>
  );
}
