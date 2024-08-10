"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/ui/container";
import { Link } from "react-scroll/modules";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ModeToggle } from "~/components/ui/toggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white/00 backdrop-blur-lg py-6 px-6">
      <Container className="md:flex flex-row justify-between md:items-center">
      <div className="flex justify-between items-center">
        <h4 className="font-montserrat font-semibold text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
          HCDC ITS
        </h4>
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <HiOutlineMenuAlt3 className="w-7 h-7" />
          </button>
        </div>
      </div>

      <div className="flex md:flex-row md:items-center lg:space-y-0 space-x-12 md:space-x-8 xl:space-x-16">
        <ul
          className={`font-montserrat lg:text-lg md:text-[15px] md:flex lg:space-x-12 md:space-x-6 ${isOpen ? "hidden" : "hidden sm:block"
            }`}
        >
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="publications"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              featured
            </Link>
          </li>
          <li>
            <Link
              to="officers"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              team
            </Link>
          </li>
          <li>
            <Link
              to="contributors"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              developers
            </Link>
          </li>
        </ul>

        <Button
          className={`bg-white font-montserrat font-semibold text-sm md:text-base transition-opacity duration-300 ease-in-out hover:opacity-70 hidden md:block`}
        >
          Browse Merch
        </Button>
        <div className="justify-center items-center hidden md:block">
          <ModeToggle />
        </div>
      </div>

      {/* BEGIN: Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"
          } flex flex-col items-end py-4 px-2 text-right space-y-4`}
      >
        <ul className="font-montserrat flex flex-col space-y-4">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="publications"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              Featured
            </Link>
          </li>
          <li>
            <Link
              to="contributors"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              Contributors
            </Link>
          </li>
          <li>
            <Link
              to="merch"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            >
              browse merch
            </Link>
          </li>
        </ul>
      </div>
      {/* END: Mobile Menu */}
      </Container>
    </div>
  );
};
