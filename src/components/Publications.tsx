"use client";

import React, { useState, useEffect } from "react";
import { Container } from "~/components/ui/Container";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import updates from "~/metadata/updates";

const updatesPerPage = 3;

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
      <Container>
        <div className="flex flex-col px-5 xl:px-0">
          <div className="mt-20 mb-5" data-aos="fade-up">
            <p className="font-montserrat font-semibold text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
              <span className="bg-[#960202] p-2 rounded-xl">
                featured updates
              </span>
            </p>
          </div>

          <div
            className="flex flex-row md:block lg:flex-row justify-center items-center my-10"
            data-aos="fade-up"
          >
            <div className="md:h-[950px] lg:mx-5 xl:mx-5 grid grid-cols-1 gap-6 sm:gap-2">
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
                    <h2 className="font-montserrat text-base sm:text-base md:text-lg lg:text-lg font-bold mb-3">
                      {update.title}
                    </h2>
                    <p className="font-montserrat text-justify text-gray-500 text-sm sm:text-sm md:text-sm lg:text-sm hidden lg:block xl:block">
                      {update.description.length > 255
                        ? `${update.description.substring(0, 255)}...`
                        : update.description}
                    </p>
                    <p className="font-montserrat text-gray-400 text-sm sm:text-base lg:text-sm my-4">
                      {update.date}
                    </p>
                    <a
                      href={update.link}
                      target="_blank"
                      className="font-montserrat font-semibold text-sm text-gray-400 my-7 underline cursor-pointer"
                    >
                      See More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center my-4 mb-24">
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
        </div>
      </Container>
    </section>
  );
};


// publications.tsx