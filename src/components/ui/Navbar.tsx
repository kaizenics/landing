"use client";

import { useState } from "react";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Link } from "react-scroll/modules";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="md:flex flex-col lg:flex-row justify-between container md:items-center py-20">
      <div className="flex justify-between items-center">
        <h4 className="font-montserrat text-2xl mb-0 lg:mb-0">HCDC-ITS</h4>

        <div className="lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex md:flex-col lg:flex-row md:items-center space-y-4 lg:space-y-0 lg:space-x-12 md:z-[-1] ">
        {/* Conditionally render links based on screen size */}
        <ul
          className={`font-montserrat lg:flex space-x-12 ${
            isOpen ? "hidden" : "hidden md:block"
          }`}
        >
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer"
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
              className="cursor-pointer"
            >
              featured
            </Link>
          </li>
          <li>
            <Link
              to="contributors"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer"
            >
              contributors
            </Link>
          </li>
        </ul>

        <Button
          className={`font-monserrat text-sm md:text-base transition-opacity duration-300 ease-in-out hover:opacity-70 hidden md:block`}
        >
          Browse Merch
        </Button>
      </div>

      {/* BEGIN: Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } flex flex-col items-end py-5 px-2 text-right space-y-4`}
      >
        <ul className="font-montserrat flex flex-col space-y-4">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
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
            >
              publications
            </Link>
          </li>
          <li>
            <Link
              to="contributors"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
            >
              contributors
            </Link>
          </li>
          <li>
            <Link
              to="merch"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer"
            >
              browse merch
            </Link>
          </li>
        </ul>
      </div>

      {/* END: Mobile Menu */}
    </Container>
  );
};
