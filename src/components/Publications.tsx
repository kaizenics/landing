"use client";

import React from "react";
import { Container } from "~/components/ui/Container";
import Slider from "react-slick";
import Image from "next/image";

import cetShirt from "~/assets/images/cet-shirt.png";
import itsMem from "~/assets/images/its-mem.png";
import frontEndPoster from "~/assets/images/front-end-poster.png";
import psitsPub from "~/assets/images/psits-pub.png";
import officers from "~/assets/images/officers.jpg";

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
];

export const Publications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section>
      <Container className="container flex flex-col px-6 xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-12 my-20">
          <p className="font-montserrat font-regular text-3xl">
            Featured updates
          </p>
          <div className="w-[76%] h-[1.5px] bg-[#3a3a3a]"></div>
        </div>

        <Slider {...settings}>
          <div className="flex focus:outline-none">
            {updates.map((update, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="relative w-[700px] h-full">
                  <Image src={update.image} alt="" objectFit="cover" />
                  <h2 className="text-2xl font-bold mb-4">{update.title}</h2>
                  <p className="text-gray-500 mb-2">{update.description}</p>
                  <p className="text-gray-400">{update.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Slider>
      </Container>
    </section>
  );
};
