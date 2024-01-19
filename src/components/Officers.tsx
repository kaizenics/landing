"use client";

import { Container } from "~/components/ui/Container";
import Image from "next/image";

import itslogo from "~/assets/images/New-ITS-Logo.png"

export const Officers = () => {
  return (
    <>
      <main>
        <Container className="container flex px-6 xl:px-0">
          <div className="container justify-start my-20">
            <h1 className="font-montserrat font-semibold text-[18px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-5xl">
              <span className="bg-[#960202] p-2 sm:px-4 md:px-5 lg:px-5 xl:px-5 rounded-xl">
                meet the team
              </span>
              </h1>
            <p className="font-montserrat font-regular text-2xl my-10">
              Information Technology Society Student Organization Current Officers
            </p>
          </div>
          
          
        </Container>
      </main>
    </>
  );
}
