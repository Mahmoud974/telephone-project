import React from "react";

export default function Navbar() {
  return (
    <nav className="text-white fixed w-full z-20 top-0 left-0 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        Smartfix
        <div className="space-x-6">
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
          <a href="#about" className="hover:text-orange-500">
            À propos
          </a>
        </div>
      </div>
    </nav>
  );
}
