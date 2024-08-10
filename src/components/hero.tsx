import { twMerge } from 'tailwind-merge'
import { Lights } from '~/components/ui/lights'
import Image from 'next/image'

import logo from '~/assets/images/logo.png'

export const Hero = () => {
  return (
    <>
    <span className="bg-transparent w-full h-screen block border-b">
      
      <div className="w-full h-full relative bg-grid-white/[0.0] px-4">
        <div className="w-full h-full flex flex-col sm:items-center items-start justify-center relative z-[1] animate-moveUp">
          <div className="relative w-full">
            <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 -top-28">
             <Image
               src={logo}
               alt=""
               width={90}
               height={90}
             />
            </div>
          </div>
          <div
            className="font-montserrat text-transparent sm:text-center text-start font-bold sm:text-7xl text-4xl bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6]"
          >
            Bridging Faith and Innovation.
          </div>
          <div className="text-white/[0.7] sm:text-center sm:text-2xl text-sm text-start">
            Empowering Holy Crossians through Technology
          </div>
          <div className="mt-5 w-full flex max-sm:flex-col justify-center sm:gap-10 gap-4 text-white">
            <button className="group h-10 sm:h-8 w-full sm:w-36 bg-gradient-to-br from-red-900 to-gray-900 border border-red-900 rounded-lg flex items-center justify-center gap-1.5">
              <span>Our Story</span>
              <span className="group-hover:translate-x-0.5 transition-all">&rarr;</span>
            </button>
            <button className="h-8 flex items-center justify-center underline">
              <span>Contact us</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0">
          <Lights />
        </div>
      </div>
    </span>
    </>
  )
}
