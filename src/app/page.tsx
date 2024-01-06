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
              <p className="font-montserrat mb-2 text-sm mb:text-md mx-2 md:text-2xl">
                <span className="font-semibold">
                  Holy Cross of Davao College{" "}
                </span>
                / Official Publication Website
              </p>
              <div className="bg-primary-200 max-w-[95%] lg:max-w-[100%] p-1 rounded-full">
                <h1 className="font-montserrat font-bold text-[31px] lg:text-7xl uppercase mx-4 md:text-5xl">
                  Information Technology
                </h1>
              </div>
              <h1 className="font-montserrat font-semibold text-7xl lg:text-9xl uppercase md:text-7xl">
                Society
              </h1>
            </div>

            <div className="text-center flex flex-col items-center">
              <p className="font-montserrat mt-[70px] mb-[30px] text-[18px] md:text-lg">
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
