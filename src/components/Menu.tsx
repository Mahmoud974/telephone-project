import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MenuNavbar() {
  return (
    <Sheet>
      {/* Icône du menu burger */}
      <SheetTrigger asChild>
        <button className="text-white">
          <Menu size={28} />
        </button>
      </SheetTrigger>

      {/* Contenu du menu */}
      <SheetContent side="left" className="bg-white text-black">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold"></SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col space-y-4">
          <SheetClose asChild>
            <a
              href="#services"
              className="block px-4 py-2 hover:text-orange-500"
            >
              Services
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="#contact"
              className="block px-4 py-2 hover:text-orange-500"
            >
              Contact
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#about" className="block px-4 py-2 hover:text-orange-500">
              À propos
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
