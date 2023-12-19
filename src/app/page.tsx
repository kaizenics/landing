import Image from "next/image";
import bgImg from "~/images/its-bg-7.png";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <p>HCDC - ITS</p>
          <div className="absolute left-0 right-0 top-0 -z-20">
            <Image 
              src={bgImg}
              priority
              alt="bg img"
              placeholder="blur"
              draggable="false"
              className="pointer-events-none -mb-96 mt-44 h-full w-full sm:mt-20 md:mt-0"
            />
          </div>
        </section>
      </main>
    </>
  );
}
