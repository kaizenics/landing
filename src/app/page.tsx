

import { About } from "~/components/About";
import { Officers } from "~/components/Officers";
import { Separator } from "~/components/ui/Separator";
import { Publications } from "~/components/Publications";
import { MainHome } from "~/components/MainHome";
import { Contributors } from '../components/Contributors';
import { Organizations } from "~/components/Organizations";

import "./index.css"


export default function Home() {
  return (
    <>
      <main>
        <MainHome />
        <About id="about" />
        <Separator />
        <Officers id="officers" />
        <Separator />
        <Publications id="publications" />
        <Separator />
        <Contributors id="contributors" />
      </main>
    </>
  );
}
