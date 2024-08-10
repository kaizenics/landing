

import { About } from "~/components/About";
import { Separator } from "~/components/ui/Separator";
import { Publications } from "~/components/Publications";
import { Hero } from "~/components/hero";
import { Partners } from "~/components/partners";

import "./index.css"


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <About id="about" />
        <Separator />
        <Publications id="publications" />
      </main>
    </>
  );
}
