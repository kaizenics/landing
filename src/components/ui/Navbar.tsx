"use client";

import { useState } from "react";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Link } from 'react-scroll/modules';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="flex flex-col lg:flex-row justify-between container items-center py-16">
      <h4 className="font-montserrat text-2xl mb-0 lg:mb-0">HCDC-ITS</h4>

      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-12">
        <ul className={`font-montserrat lg:flex space-x-12 ${isOpen ? "hidden" : "block"}`}>
          <li>
            <Link to="about" smooth={true} duration={500} spy={true} offset={-70} className="cursor-pointer">about</Link>
          </li>
          <li>
            <Link to="publications" smooth={true} duration={500} spy={true} offset={-70} className="cursor-pointer">featured</Link>
          </li>
          <li>
            <Link to="contributors" smooth={true} duration={500} spy={true} offset={-70} className="cursor-pointer">contributors</Link>
          </li>
        </ul>

        <Button className="font-monserrat text-sm md:text-base transition-opacity duration-300 ease-in-out hover:opacity-70">
          Browse Merch
        </Button>

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

      {/* BEGIN: Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="font-montserrat flex flex-col space-y-4">
          <li>
            <Link to="about" smooth={true} duration={500} spy={true} offset={-70}>About</Link>
          </li>
          <li>
            <Link to="publications" smooth={true} duration={500} spy={true} offset={-70}>Publications</Link>
          </li>
          <li>
            <Link to="contributors" smooth={true} duration={500} spy={true} offset={-70}>Contributors</Link>
          </li>
        </ul>
      </div>
      {/* END: Mobile Menu */}
    </Container>
  );
};