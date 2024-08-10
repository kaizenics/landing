

import { About } from "~/components/about";
import { Separator } from "~/components/ui/separator";
import { Publications } from "~/components/publications";
import { Hero } from "~/components/hero";
import { Partners } from "~/components/partners";
import { Contributors } from '../components/contributors';
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
