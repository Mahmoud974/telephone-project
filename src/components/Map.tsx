import Image from "next/image";

export default function ExpansionMap() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SMARTFIX : Bientôt dans votre ville !
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {`Vous vous demandez si notre service de réparation arrive chez vous
              ? Depuis nos débuts en 2011, nous avons étendu notre couverture à
              de nombreuses villes de la métropole bordelaise, ainsi qu'à Paris
              et ses environs. Aujourd'hui, notre objectif est d'offrir nos
              services de réparation dans toutes les régions de France. Un jour,
              nos experts en réparation parcourront les rues de votre ville pour
              sauver vos téléphones et tablettes. D'ici là, profitez de nos
              réparations à distance !`}
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/map.png"
              alt="Carte de l'expansion du service"
              width={500}
              height={500}
              className="rounded-lg  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
