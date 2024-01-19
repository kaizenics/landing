"use client";

import { Container } from "~/components/ui/Container";
import Image from "next/image";

import itslogo from "~/assets/images/New-ITS-Logo.png"

export const Officers = () => {
  return (
    <>
      <main>
        <Container className="container flex px-6 xl:px-0">
          <div className="container flex items-center justify-center space-x-8 my-20">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src={itslogo}
                  alt="HCDC-ITS Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
         
            <h1 className="font-montserrat font-semibold text-[18px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-3xl">
              <span className="bg-[#960202] p-2 sm:px-4 md:px-5 lg:px-5 xl:px-5">
                Introduction of Officers
              </span>
            </h1>
          </div>
    
        </Container>
      </main>
    </>
  );
}
