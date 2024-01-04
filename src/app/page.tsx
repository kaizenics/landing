import { IoArrowForward } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <main>
        <div className="container mx-auto flex flex-col px-6 xl:px-0">
          <div className="block flex-col-reverse lg:flex-row justify-between items-center py-12 my-20">
            <p className="font-montserrat mb-2 text-2xl mx-2">
              <span className="font-semibold">Holy Cross of Davao College </span> 
               / Official Publication Website
            </p>
            <div className="bg-primary-200 w-full lg:w-13/13">
              <h1 className="font-montserrat font-bold text-4xl lg:text-7xl uppercase">Information Technology</h1>
            </div>
            <h1 className="font-montserrat font-semibold text-4xl lg:text-9xl uppercase">Society</h1>
          </div>

          <section>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:my-96 py-12">
              <div className="lg:w-1/2 lg: ml-14 my-40">
                <h3 className="font-montserrat font-regular text-3xl lg:text-5xl mb-8">About us</h3>
                <p className="font-montserrat font-regular lg:text-3xl text-left">
                  The <span className="font-semibold">HCDC Information Technology Society</span> is a student organization that aims to promote the field of Information Technology to the students of Holy Cross of Davao College.
                </p>
                <div className="flex items-center underline">
                  <button className="font-montserrat text-sm md:text-base lg:text-3xl transition-opacity duration-300 ease-in-out hover:opacity-70 mt-14">Our Story</button>
                  <IoArrowForward className="w-8 h-8 ml-2 mt-14" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
