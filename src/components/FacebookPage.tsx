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
import hcdcbsitalumni from "~/assets/images/hcdc-bsit-alumni-association.png";

const updatesPerPage = 3;

const updates = [
  {
    title: "Front End Developer Roadmap",
    description:
      "Are you passionate about Web Development, with a keen interest in both Designing and Programming? This comprehensive guide is tailored for individuals like you, providing a clear path to becoming a proficient Front-end Web Developer",
    date: "September 18, 2021",
    image: frontEndPoster,
    link: "http://tinyurl.com/yuhn8evr",
  },
  {
    title: "HCDC BSIT Alumni Organization",
    description:
      "Embark on a lifelong learning odyssey with HCDC BSIT Alumni, where our educational journey extends far beyond the confines of school walls. Here, we believe that learning is a continuous adventure, and our alumni community serves as a beacon for intellectual exploration, professional growth, and unwavering camaraderie. Join us as we navigate the ever-evolving landscape of technology and information, proving that the pursuit of knowledge knows no bounds. At HCDC BSIT Alumni, the chapter after graduation is just as compelling as the chapters within the classroom. Together, let’s redefine the narrative of education and shape a future where curiosity knows no limits.",
    date: "September 18, 2021",
    image: hcdcbsitalumni,
    link: "https://hcdcbsitalumni.com/",
  },
  {
    title: "HCDC ITS New Officers 2023",
    description:
      "We are excited to have such talented individuals on board, and we are confident that they will continue to uphold the club's mission of promoting innovation and excellence in the field of information technology. Best of luck to our new leaders as they take on this important role!",
    date: "September 18, 2021",
    image: officers,
    link: "http://tinyurl.com/44btcmau",
  },
  {
    title: "ITS Membership",
    description:
      "Lorem ipsum dolor sit amet, consectetur adnpmipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: itsMem,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/",
  },
  {
    title: "PSITS XI: Festival of Talents 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: psitsPub,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/",
  },
  {
    title: "CET Shirt Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: cetShirt,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/",
  },
  {
    title: "Bakit nag IT ang Beshy Ko?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Ut ultricies pulvinar posuere.",
    date: "September 18, 2021",
    image: beshyKo,
    link: "https://www.facebook.com/HCDCITS/photos/a.10150174591300054/10160194599660054/q",
  },
];

interface FacebookPageProps {
  id: string;
}

export const FacebookPage: React.FC<FacebookPageProps> = ({ id }) => {
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
            Facebook Page
          </p>
          <div className="w-[45%] h-[1.5px] sm:w-[60%] md:w-[64%] lg:w-[73%] xl:w-[76%] bg-[#3a3a3a]"></div>
        </div>

        <div className="flex flex-col md:block lg:flex-row justify-center align-middle items-center my-10">
          <div className="h-full lg:mx-5 xl:mx-5 grid-cols-1 gap-6 flex justify-center"
            data-aos="fade-up">
            {/**
               * 
               *  NO FIX YET plsfix
               *  ❎embed wont render if user has
               *  - adblock
               * 
               *  wont render on chrome (renders well on chrome incognito mode)
               *  ✅ renders on firefox
               * 
               *  NOTE: max width allowed for embed is 500px ONLY!!!
               */}
            <div className="fb-page" data-href="https://www.facebook.com/hcdcits" data-lazy="true" data-tabs="timeline" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/hcdcits" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/hcdcits">HCDC Information Technology Society</a></blockquote></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
