import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="bg-black py-9 flex items-center ">
      <div className="mx-auto container flex items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold  text-white mb-4">
            SMARTFIX : Bientôt dans votre ville !
          </h2>
          <p className="text-lg text-white mb-6 w-4/5">
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
        <section className="max-w-lg mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Contactez-nous
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Remplissez ce formulaire et nous vous répondrons rapidement.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Nom</label>
              <Input type="text" placeholder="Votre nom" required />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <Input type="email" placeholder="Votre email" required />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <Textarea placeholder="Votre message" rows={4} required />
            </div>

            <Button type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
