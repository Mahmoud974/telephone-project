// components/SelectModel.jsx
export default function SelectModel() {
  const models = [
    "iPhone 15 Pro Max",
    "iPhone 15 Pro",
    "iPhone 15 Plus",
    "iPhone 15",
    "iPhone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14 Plus",
    "iPhone 14",
    "iPhone SE (2022)",
    "iPhone 13 Pro Max",
    "iPhone 13 Pro",
    "iPhone 13",
    "iPhone 13 mini",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12",
    "iPhone 12 mini",
    "iPhone SE (2020)",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
    "iPhone Xs Max",
    "iPhone Xs",
    "iPhone XR",
    "iPhone X",
    "iPhone 8 Plus",
    "iPhone 8",
    "iPhone 7 Plus",
    "iPhone 7",
    "iPhone 6s Plus",
    "iPhone 6s",
    "iPhone SE (2016)",
    "iPhone 6 Plus",
    "iPhone 6",
    "iPhone 5s",
    "iPhone 5c",
  ];

  return (
    <section className="py-12  ">
      <div className="container mx-auto px-6">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Le modèle
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Sélectionnez l’iPhone que vous voulez faire réparer
        </p>

        {/* Liste des modèles */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <button
              key={index}
              className="bg-white border border-gray-300 text-gray-800 rounded-lg py-3 px-4 text-sm font-medium shadow-sm hover:bg-teal-500 hover:text-white hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {model}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
