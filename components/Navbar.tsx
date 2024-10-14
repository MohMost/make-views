"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0F0F0F]/70 justify-between w-full h-fit backdrop-filter backdrop-blur-md text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:justify-between md:w-full">
            <Link href="/" className="flex-shrink-0">
              <Image
                width={32}
                height={32}
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Logo"
              />
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <Link
                  href="#creations"
                  className="hover:bg-primary px-3 py-2 rounded-2xl text-base font-medium"
                >
                  Nos créations
                </Link>
                <Link
                  href="#whyus"
                  className="hover:bg-primary px-3 py-2 rounded-2xl text-base font-medium"
                >
                  Pourquoi nous choisir
                </Link>
                <Link
                  href="#services"
                  className="hover:bg-primary px-3 py-2 rounded-2xl text-base font-medium"
                >
                  Nos Services
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-[#0F0F0F]/70 h-screen">
          <div className="px-2 text-white pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#creations"
              className="hover:bg-primary px-3 py-2 rounded-2xl block text-base font-medium"
            >
              Nos créations
            </Link>
            <Link
              href="#whyus"
              className="hover:bg-primary px-3 py-2 rounded-2xl block text-base font-medium"
            >
              Pourquoi nous choisir
            </Link>
            <Link
              href="#services"
              className="hover:bg-primary px-3 py-2 rounded-2xl block text-base font-medium"
            >
              Nos Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
