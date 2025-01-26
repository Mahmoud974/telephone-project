import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function AccordionQuestions() {
  return (
    <div className="mb-12 flex justify-center items-center">
      <div className="max-w-3xl flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-6">
        <Image
          src="/iphone.jpg"
          alt="Smartphone"
          width={400}
          height={400}
          className="w-[250px] md:w-[400px] rounded-lg" // Ajuste la largeur de l'image pour plus de fluidité
        />
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-1/2 space-y-4"
        >
          {" "}
          {/* Ajustement de largeur et espacement */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quel est le tarif d'une réparation ?
            </AccordionTrigger>
            <AccordionContent>
              Le coût varie selon le modèle de votre appareil, mais les
              réparations commencent à partir de 19€.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Combien de temps faut-il pour réparer mon appareil ?
            </AccordionTrigger>
            <AccordionContent>
              En général, la réparation prend environ 30 minutes. Cela peut
              varier en fonction de la complexité.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Quand est-ce que je dois régler la facture ?
            </AccordionTrigger>
            <AccordionContent>
              Le règlement se fait une fois la réparation terminée, lorsque vous
              récupérez votre appareil.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Est-ce que faire réparer mon appareil annule ma garantie ?
            </AccordionTrigger>
            <AccordionContent>
              Non, votre garantie reste valide tant que la réparation est
              effectuée par des professionnels agréés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Puis-je faire réparer mon appareil immédiatement sur place ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, nous réparons de nombreux appareils sur place. Cependant,
              pour certaines réparations, il peut y avoir un délai
              supplémentaire.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Dois-je absolument prendre rendez-vous ?
            </AccordionTrigger>
            <AccordionContent>
              {`Ce n'est pas obligatoire, mais cela vous permet de choisir l'heure
              qui vous convient et de vous garantir une place.`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
