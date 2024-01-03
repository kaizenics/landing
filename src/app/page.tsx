

export default function Home() {
  return (
    <>
      <main>
        <div className="container mx-auto flex flex-col px-6 xl:px-0">
          <div className="block flex-col-reverse lg:flex-row justify-between items-center py-12">
            <p className="font-montserrat text-2xl mx-2">Holy Cross of Davao College</p>
            <div>
            <h1 className="font-montserrat font-bold bg-primary-200 text-5xl lg:text-8xl uppercase">Information Technology</h1>
            <h1 className="font-montserrat font-semibold text-5xl lg:text-9xl uppercase">Society</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

