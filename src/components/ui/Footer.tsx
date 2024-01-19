import Image from "next/image";
import { Container } from "~/components/ui/Container";

import itslogo from "~/assets/images/New-ITS-Footer.png";

export const Footer = () => {
  return (
    <>
      <section>
        <div className="w-[100%] h-[1.5px] bg-[#3a3a3a]">
          <div className="px-2" />
        </div>
        <Container className="container flex px-6 xl:px-0">
          <footer>
            <div className="flex flex-wrap space-x-36">
              <div className="mx-[10px] my-[8%] align-left space-y-4">
                <h1 className="font-montserrat font-semibold text-lg mb-4 text-white content-start">
                  Resources
                </h1>
                <div className="font-montserrat text-md items-start text-[#afaeaedc] inline-block mb-[5px]">
                  <p className="mb-3">Help</p>
                  <p className="mb-3">Privacy</p>
                  <p className="mb-3">FAQ</p>
                </div>
              </div>
              <div className="mx-[10px] my-[8%] align-left space-y-4">
                <h1 className="font-montserrat font-semibold text-lg mb-4 text-white content-start">
                  Socials
                </h1>
                <div className="font-montserrat text-md items-start text-[#afaeaedc] inline-block mb-[5px] whitespace-nowrap">
                  <a href="https://www.facebook.com/hcdcits" target="_blank" rel="noopener noreferrer">
                    <p className="mb-3 hover:underline hover:text-white">Facebook</p>
                  </a>
                  <p className="mb-3">Instagram</p>
                  <p className="mb-3">GitHub</p>
                </div>
              </div>
              <div className="mx-[10px] my-[8%] align-left space-y-4">
                <h1 className="font-montserrat font-semibold text-lg mb-4 text-white content-start">
                  Open Source
                </h1>
                <div className="font-montserrat text-md items-start text-[#afaeaedc] inline-block mb-[5px] whitespace-nowrap">
                  <p className="mb-3">Contribute</p>
                  <a href="https://github.com/kaizenics/hcdc-its/issues" target="_blank" rel="noopener noreferrer">
                    <p className="mb-3 hover:underline hover:text-white">Report a bug</p>
                  </a>
                  <a href="https://github.com/kaizenics/hcdc-its/issues" target="_blank" rel="noopener noreferrer">
                    <p className="mb-3 hover:underline hover:text-white">Request a feature</p>
                  </a>
                </div>
              </div>
              <div className="relative w-[500px] h-[100px] my-24">
                <Image
                  src={itslogo}
                  alt="HCDC-ITS Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </footer>
        </Container>
      </section>

      <section>
        <Container className="container flex px-6 xl:px-0">
          <div className="font-montserrat text-md items-start text-[#dfdfdfdc] inline-block mb-20 whitespace-nowrap">
            <p>HCDC ITS / Niko Soriano © 2024 All Rights Reserved</p>
          </div>
        </Container>
      </section>
    </>
  );
};
