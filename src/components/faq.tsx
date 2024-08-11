import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Container } from "~/components/ui/Container";
import { Separator } from "~/components/ui/Separator";
import "aos/dist/aos.css";

export function FAQ() {
  return (
    <>
      <Separator />
      <Container data-aos="fade-up">
        <div className="mx-5 sm:mx-0">
          <div className="mt-20 mb-5">
            <p className="font-montserrat font-semibold text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
              <span className="bg-[#960202] p-2 rounded-xl">
                frequently asked questions
              </span>
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full pt-8 pb-14">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                When was the HCDC Information Technology Society founded?
              </AccordionTrigger>
              <AccordionContent>
                The HCDC Information Technology Society was founded in 2008.
                Since its inception, the society has embarked on a journey of
                growth and success, striving to create a supportive environment
                for students pursuing Information Technology. Over the years, it
                has provided numerous opportunities for members to enhance their
                skills, network with professionals, and contribute to the IT
                community.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How much is the membership fee for the HCDC Information
                Technology Society?
              </AccordionTrigger>
              <AccordionContent>
                For just 50 pesos, you can become a member of the HCDC
                Information Technology Society and be part of a vibrant
                community dedicated to IT enthusiasts!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is there a group chat for BSIT Freshmen Students?
              </AccordionTrigger>
              <AccordionContent>
                The HCDC Information Technology Society does not provide an
                official group chat for freshmen students. However, you can
                reach out to the official page to inquire if an existing group
                chat has been set up by other members or students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Who are the Developers of the HCDC Information Technology?
              </AccordionTrigger>
              <AccordionContent>
                it was maintained by Niko Soriano, a Creatives Head and Project
                Lead of the HCDC Information Technology Society. Jeo Carlo Lubao
                is also the Open-source Contributor of the website.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </>
  );
}
