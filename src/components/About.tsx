"use client";

import { useEffect } from 'react'
import { IoArrowForward } from "react-icons/io5";
import AOS from "aos";
import 'aos/dist/aos.css';
interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  useEffect (() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id={id} className="mt-[35%] mb-96"  data-aos="fade-up">
      <div className="grid lg:grid-cols-2 gap-0 py-14 mx-auto border-t-2 border-[#3a3a3a]"
      data-aos="fade-up"
      >
          <div className="m-10 sm:m-10 md:m-10 lg:w-3/4 lg:ml-28 xl:w-3/4 xl:ml-40">
            <h3 className="font-montserrat font-regular text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-8">
              About us
            </h3>
            <p className="font-montserrat font-regular lg:text-2xl xl:text-3xl text-left">
              The{" "}
              <span className="font-semibold">
                HCDC Information Technology Society
              </span>{" "}
              is a student organization that aims to promote the field of
              Information Technology to the students of Holy Cross of Davao
              College.
            </p>
            <div className="flex items-center underline">
              <button className="font-montserrat sm:text-[20px] md:text-[25px] lg:text-3xl transition-opacity duration-300 ease-in-out hover:opacity-70 mt-14">
                Our Story
              </button>
              <IoArrowForward className="w-8 h-8 ml-2 mt-14" />
            </div>
        </div>

          <div className="m-10 sm:m-10 md:m-10 lg:w-3/4 xl:w-3/4">
            <h3 className="font-montserrat font-regular text-3xl lg:text-4xl xl:text-5xl mb-8">
              Our Mission
            </h3>
            <p className="font-montserrat font-regular lg:text-2xl xl:text-3xl text-left">
              To provide opportunities for students to enhance their IT skills,
              knowledge, and professional development through various
              activities and initiatives.
            </p>
          </div>

      </div>
    </section>
  );
};