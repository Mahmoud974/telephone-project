import { CircleUserRound, ShoppingCart } from "lucide-react";
import React from "react";
import { MenuNavbar } from "./Menu";

export default function Navbar() {
  return (
    <>
      <nav className="text-white fixed w-full z-20 top-0 left-0 py-4">
        <div className="md:hidden flex justify-between mx-3">
          <p>Smartfix</p>
          <div className="flex items-center gap-3">
            <ShoppingCart />
            <CircleUserRound />
            <MenuNavbar />
          </div>
        </div>
        <div className="md:flex hidden container mx-auto px-6   justify-between items-center">
          <p>Smartfix</p>
          <div className="space-x-6 flex">
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
            <a href="#about" className="hover:text-orange-500">
              À propos
            </a>
            <a href="">
              <ShoppingCart />
            </a>
            <a href="">
              <CircleUserRound />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
