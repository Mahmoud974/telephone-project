import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="bg-slate-100 text-black py-9 flex items-center ">
      <div className="mx-auto container flex flex-col items-center">
        <div className="md:w-1/2 text-black text-center md:text-left">
          <h2 className="text-3xl text-center font-bold   mb-4">
            SMARTFIX : Bientôt dans votre ville !
          </h2>
          <p className="text-lg lg:mx-0 px-5   text-center  lg:w-4/5 mx-auto">
            {`Depuis 2011, nous avons étendu nos réparations de Bordeaux à Paris et visons toute la France. En attendant, profitez de nos services à distance !`}
          </p>
        </div>
        <section className="max-w-lg   mt-12 p-6 lg:mx-0 mx-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Contactez-nous
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Remplissez ce formulaire et nous vous répondrons rapidement.
          </p>

          <form className="mt-6 space-y-4 ">
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
