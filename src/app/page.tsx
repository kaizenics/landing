import { About } from "~/components/About";
import { Publications } from "~/components/Publications";
import { Container } from "~/components/ui/Container";
import { MdExpandMore } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main>
       <section>
        <Container className="container mx-auto flex flex-col px-6 xl:px-0">
          <div className="block flex-col-reverse lg:flex-row justify-between items-center py-12 my-20">
            <p className="font-montserrat mb-2 text-2xl mx-2">
              <span className="font-semibold">Holy Cross of Davao College </span> 
               / Official Publication Website
            </p>
            <div className="bg-primary-200 w-[90%] p-2 rounded-full">
              <h1 className="font-montserrat font-bold text-4xl lg:text-7xl uppercase mx-4">Information Technology</h1>
            </div>
            <h1 className="font-montserrat font-semibold text-4xl lg:text-9xl uppercase">Society</h1>
          </div>

          <div className="text-center flex flex-col items-center">
            <p className="font-montserrat mt-[70px] mb-[30px] text-[18px]">Scroll down</p>
            <MdExpandMore className="w-10 h-10 animate-bounce" />
          </div>
        </Container>
        </section>

        <About />
        <Publications />
      </main>
    </>
  );
}
