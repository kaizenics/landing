
import { Container } from "~/components/ui/Container";
import Image from "next/image";

const officers = [
  {
    name: "Keana Cerela Giron",
    position: "Moderator",
    image: moderator,
  },
  {
    name: "Joshua Vergel Scalercio",
    position: "President",
    image: president,
  },
  {
    name: "Dave Andrew Arafol",
    position: "Internal Vice President",
    image: internalvp,
  },
  {
    name: "Christian Lorrence Alparro",
    position: "External Vice President",
    image: externalvp,
  },
  {
    name: "Crissalyn Casuyon",
    position: "Secretary",
    image: secretary,
  },
  {
    name: "Jovi Nica Macuha",
    position: "Assistant Secretary",
    image: asstsecretary,
  },
  {
    name: "Xurhiel Almero",
    position: "Treasurer",
    image: treasurer,
  },
  {
    name: "Gladys Quianzon",
    position: "Assistant Treasurer",
    image: assttreasurer,
  },
  {
    name: "Honnie Pilletero",
    position: "Auditor",
    image: auditor,
  },
  {
    name: "Mekaylle Kean Daquiz",
    position: "Assistant Auditor",
    image: asstauditor,
  },
  {
    name: "Rod Riven Ladroma",
    position: "Business Manager",
    image: businessmgr,
  },
  {
    name: "Orivlle Salvilla",
    position: "Asst. Business Manager",
    image: asstbusinessmgr,
  },
  {
    name: "Andy Quezon",
    position: "P.I.O.",
    image: pio,
  },
  {
    name: "Art Dela Cruz",
    position: "Representative",
    image: rep1,
  },
  {
    name: "Kenneth Gulmatico",
    position: "Representative",
    image: rep2,
  },
  {
    name: "Apriel Love Libre",
    position: "Representative",
    image: rep3,
  },
  {
    name: "John Rey Manos",
    position: "Representative",
    image: rep4,
  },
  {
    name: "Niko Soriano",
    position: "Graphics and Media Manager",
    image: graphics,
  },
];

import moderator from "~/assets/images/officers/moderator.jpg";
import president from "~/assets/images/officers/president.jpg";
import internalvp from "~/assets/images/officers/internal_vp.jpg";
import externalvp from "~/assets/images/officers/external_vp.jpg";
import secretary from "~/assets/images/officers/secretary.jpg";
import asstsecretary from "~/assets/images/officers/asst_secretary.png";
import treasurer from "~/assets/images/officers/treasurer.jpg";
import assttreasurer from "~/assets/images/officers/asst_treasurer.jpeg";
import auditor from "~/assets/images/officers/auditor.jpeg";
import asstauditor from "~/assets/images/officers/user.png";
import businessmgr from "~/assets/images/officers/user.png";
import asstbusinessmgr from "~/assets/images/officers/asst_business_manager.jpg";
import pio from "~/assets/images/officers/pio.jpg";
import rep1 from "~/assets/images/officers/rep1.jpg";
import rep2 from "~/assets/images/officers/rep2.jpg";
import rep3 from "~/assets/images/officers/rep3.jpg";
import rep4 from "~/assets/images/officers/rep4.jpg";
import graphics from "~/assets/images/contributors/niko_soriano.jpg";

interface OfficersProps {
  id: string;
}

export const Officers: React.FC<OfficersProps> = ({ id }) => {
  return (
    <>
      <main id={id}>
        <Container className="container flex px-6 xl:px-0">
          <div className="container justify-start my-20" data-aos="fade-up">
            <h1 className="font-montserrat font-semibold text-[18px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-5xl">
              <span className="bg-[#960202] p-2 sm:px-4 md:px-5 lg:px-5 xl:px-5 rounded-xl">
                meet the team
              </span>
            </h1>
            <p className="font-montserrat font-regular text-2xl my-10">
              Information Technology Society Student Organization Current
              Officers (A.Y. 2023-2024)
            </p>

            <div className="flex flex-col md:block lg:flex-row xl:flex-row justify-between items-center my-10">
              <div
                className="h-full lg:mx-5 xl:mx-5 grid grid-cols-4 gap-6"
                data-aos="fade-up"
              >
                {officers.map((officer, index) => (
                  <div
                    key={index}
                    className="w-[100%] h-full sm:h-full md:h-full lg:h-[180px] xl:h-[250px] box-border border-2 border-[#3a3a3a] block sm:block md:block lg:flex xl:flex flex-col justify-between items-center transition-transform duration-300 ease-in-out"
                  >
                    <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden mt-7">
                      <Image src={officer.image} alt="" />
                    </div>
                    <p className="font-montserrat font-semibold text-xl mt-2">
                      {officer.name}
                    </p>
                    <p className="font-montserrat font-regular text-md mb-7">
                      {officer.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};
