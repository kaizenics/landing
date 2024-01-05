"use client";

import React, { useState, useEffect } from "react";
import { Container } from "~/components/ui/Container";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import cetShirt from "~/assets/images/cet-shirt.png";
import itsMem from "~/assets/images/its-mem.png";
import frontEndPoster from "~/assets/images/front-end-poster.png";
import psitsPub from "~/assets/images/psits-pub.png";
import officers from "~/assets/images/officers.jpg";
import beshyKo from "~/assets/images/beshy-ko.png";

const updatesPerPage = 3;

const updates = [
  {
    title: "Front End Developer Roadmap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: frontEndPoster,
  },
  {
    title: "HCDC ITS New Officers 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: officers,
  },
  {
    title: "ITS Membership",
    description:
      "Lorem ipsum dolor sit amet, consectetur adnpmipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: itsMem,
  },
  {
    title: "PSITS XI: Festival of Talents 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: psitsPub,
  },
  {
    title: "CET Shirt Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: cetShirt,
  },
  {
    title: "Bakit nag IT ang Beshy Ko?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: beshyKo,
  },
];

export const Publications = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = updates.slice(indexOfFirstUpdate, indexOfLastUpdate);

  const totalPages = Math.ceil(updates.length / updatesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section>
      <Container className="container flex flex-col px-6 xl:px-0">
        <div
          className="flex flex-col-reverse lg:flex-row justify-between items-center py-6"
          data-aos="fade-up"
        >
          <p className="font-montserrat font-regular text-3xl">
            Featured updates
          </p>
          <div className="w-[76%] h-[1.5px] bg-[#3a3a3a]"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center my-10">
          <div className="h-full mx-5 grid grid-cols-1 gap-6"
           data-aos="fade-up">
            {currentUpdates.map((update, index) => (
              <div
                key={index}
                className="w-[100%] h-[300px] box-border border-2 border-[#3a3a3a] flex flex-col lg:flex-row justify-between items-center transition-transform duration-300 ease-in-out hover:scale-105"
                
              >
                <div className="relative w-[500px] h-full">
                  <Image
                    src={update.image}
                    alt={update.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-11/12 h-[400px]"
                  />
                </div>
                <div className="mx-5 px-5">
                  <h2 className="font-montserrat text-2xl font-bold mb-3">{update.title}</h2>
                  <p className="font-montserrat text-gray-500">{update.description}</p>
                  <p className="font-montserrat text-gray-400 my-4">{update.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 ${
                currentPage === index + 1
                  ? "font-montserrat font-bold bg-white text-gray-700 border-2 border-white"
                  : "font-montserrat font-bold bg-transparent text-white border-2 border-[#3a3a3a]"
              } rounded-md`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};
