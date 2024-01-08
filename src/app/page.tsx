

import { About } from "~/components/About";
import { Publications } from "~/components/Publications";
import { Container } from "~/components/ui/Container";
import { MdExpandMore } from "react-icons/md";
import "./index.css"

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Container className="container mx-auto flex flex-col">
            <div className="container flex flex-col my-20">
              <p className="font-montserrat mb-2 sm:mb-2 md:mb-2 lg:mb-1 xl:mb-1 text-[9px] sm:text-[14px] md:text-[18px] lg:text-[25px] xl:text-[25px] mx-2">
                <span className="font-semibold">
                  Holy Cross of Davao College 
                </span> / Official Publication Website
              </p>
            
              
                <h1 className="font-montserrat font-bold text-[18px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-[65px] uppercase">
                  <span className=" bg-gradient-to-r from-[#5a0d0d] via-[#e42121] to-[#5a0d0d] background-animate w-[100%] p-2 sm:px-4 md:px-5 lg:px-5 xl:px-5 rounded-full">Information Technology</span>
                </h1>
  
              <h1 className="font-montserrat mt-1 font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl uppercase ">
                Society
              </h1>
            </div>

            <div className="text-center flex flex-col items-center">
              <p className="font-montserrat mt-[170px] mb-[30px] text-[15px] md:text-lg">
                Scroll down
              </p>
              <MdExpandMore className="w-10 h-10 animate-bounce" />
            </div>
          </Container>
        </section>

        <About id="about" />
        <Publications id="publications" />
      </main>
    </>
  );
}
