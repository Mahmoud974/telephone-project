"use client";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { MenuNavbar } from "./Menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`text-white fixed w-full z-20 top-0 left-0 py-4 transition-all ${
          isScrolled ? "bg-orange-600" : "bg-transparent"
        }`}
      >
        <div className="md:hidden flex justify-between mx-3">
          <p>Smartfix</p>
          <div className="flex items-center cursor-pointer gap-3">
            <ShoppingCart />
            <CircleUserRound />
            <MenuNavbar />
          </div>
        </div>
        <div className="md:flex hidden container mx-auto px-6 justify-between items-center">
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
