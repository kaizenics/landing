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
      "Are you passionate about Web Development, with a keen interest in both Designing and Programming? This comprehensive guide is tailored for individuals like you, providing a clear path to becoming a proficient Front-end Web Developer",
    date: "September 18, 2021",
    image: frontEndPoster,
    link: "http://tinyurl.com/yuhn8evr"
  },
  {
    title: "HCDC ITS New Officers 2023",
    description:
      "We are excited to have such talented individuals on board, and we are confident that they will continue to uphold the club's mission of promoting innovation and excellence in the field of information technology. Best of luck to our new leaders as they take on this important role!",
    date: "September 18, 2021",
    image: officers,
    link: "http://tinyurl.com/44btcmau"
  },
  {
    title: "ITS Membership",
    description:
      "Lorem ipsum dolor sit amet, consectetur adnpmipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: itsMem,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/"
  },
  {
    title: "PSITS XI: Festival of Talents 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: psitsPub,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/"
  },
  {
    title: "CET Shirt Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: cetShirt,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/"
  },
  {
    title: "Bakit nag IT ang Beshy Ko?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: beshyKo,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/q"
  },
];

interface PublicationsProps {
  id: string;
}

export const Publications: React.FC<PublicationsProps> = ({ id }) => {
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
    <section id={id}>
      <Container className="container flex flex-col px-6 xl:px-0">
        <div
          className="flex flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center py-6"
          data-aos="fade-up"
        >
          <p className="font-montserrat font-regular text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
            Featured updates
          </p>
          <div className="w-[50%] h-[1.5px] sm:w-[60%] md:w-[64%] lg:w-[73%] xl:w-[76%] bg-[#3a3a3a]"></div>
        </div>

        <div className="flex flex-col md:block lg:flex-row justify-between items-center my-10">
          <div className="h-full lg:mx-5 xl:mx-5 grid grid-cols-1 gap-6"
           data-aos="fade-up">
            {currentUpdates.map((update, index) => (
              <div
                key={index}
                className="w-[100%] h-full sm:h-full md:h-full lg:h-[300px] xl:h-[300px] lg:w-[95%] box-border border-2 border-[#3a3a3a] block sm:block md:block lg:flex xl:flex flex-row justify-between items-center transition-transform duration-300 ease-in-out hover:scale-105"
                
              >
                <div className="relative h-[250px] lg:min-w-[300px] xl:min-w-[300px] sm:h-[450px] md:h-[600px] lg:h-full xl:h-full">
                  <Image
                    src={update.image}
                    alt={update.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                
                <div className="mx-7 py-8">
                  <h2 className="font-montserrat text-base sm:text-base md:text-lg lg:text-lg font-bold mb-3">{update.title}</h2>
                  <p className="font-montserrat text-gray-500 text-sm sm:text-sm md:text-sm lg:text-sm">{update.description}</p>
                  <p className="font-montserrat text-gray-400 text-sm sm:text-base lg:text-sm my-4">{update.date}</p>
                  <a href={update.link} target="_blank" className="font-montserrat font-semibold text-sm text-gray-400 my-7 underline cursor-pointer">See More</a>
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