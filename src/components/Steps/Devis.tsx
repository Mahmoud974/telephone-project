import { useState } from "react";

export default function Devis() {
  const [marque, setMarque] = useState("iPad");
  const [modele, setModele] = useState("");
  const [reparations, setReparations] = useState({
    reparation1: "",
    reparation2: "",
    reparation3: "",
  });
  const [total, setTotal] = useState(0);

  // Liste des réparations possibles
  const optionsReparations = [
    { label: "Écran cassé", prix: 100 },
    { label: "Batterie défectueuse", prix: 50 },
    { label: "Problème de caméra", prix: 80 },
  ];

  // Mettre à jour les réparations et recalculer le total
  const handleReparationChange = (key, value) => {
    const selectedOption = optionsReparations.find(
      (opt) => opt.label === value
    );
    const prix = selectedOption ? selectedOption.prix : 0;

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
    <div className="border rounded-xl shadow-lg p-6 w-80 bg-white">
      <h3 className="text-xl font-bold mb-6">Devis</h3>

      {/* Marque */}
      <div className="mb-6">
        <label className="text-sm text-gray-600">Marque :</label>
        <input
          type="text"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          className="mt-2 w-full border rounded-md p-2 text-gray-800"
        />
      </div>

      {/* Modèle */}
      <div className="mb-6">
        <label className="text-sm text-gray-600">Modèle :</label>
        <input
          type="text"
          placeholder="Sélectionnez un modèle"
          value={modele}
          onChange={(e) => setModele(e.target.value)}
          className="mt-2 w-full border rounded-md p-2 text-gray-800"
        />
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
