import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function AccordionQuestions() {
  return (
    <div className="container mx-auto mb-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center lg:gap-12 gap-6">
        <Image
          src="/iphone.jpg"
          alt="Smartphone"
          width={500}
          height={500}
          className="w-full md:max-w-lg   rounded-xl shadow-lg"
        />
        <Accordion type="single" collapsible className="w-full max-w-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {` Quel est le tarif d'une réparation ?`}
            </AccordionTrigger>
            <AccordionContent>
              Le coût varie selon le modèle, à partir de 19€.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Combien de temps dure une réparation ?
            </AccordionTrigger>
            <AccordionContent>
              Environ 30 minutes selon la complexité.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Quand dois-je payer ?</AccordionTrigger>
            <AccordionContent>
              Après la réparation, lors de la récupération.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ma garantie est-elle annulée ?</AccordionTrigger>
            <AccordionContent>
              Non, si la réparation est effectuée par des professionnels agréés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Puis-je faire réparer immédiatement ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, sauf si un délai est nécessaire pour certaines réparations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Dois-je prendre rendez-vous ?</AccordionTrigger>
            <AccordionContent>
              Non, mais cela vous garantit un créneau adapté.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
