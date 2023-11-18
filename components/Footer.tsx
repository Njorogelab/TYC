import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icons";
import { Separator } from "./ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Footer = ({}) => {
  return (
    <>
      <div className="inline-flex flex-col items-start justify-between w-full gap-12 px-20 py-12 bg-neutral-950">

        <div className="inline-flex items-center self-stretch justify-start gap-12">
          
            <div className="inline-flex justify-between w-full gap-1 ">
              
              <div className="inline-flex items-end justify-center ">
              <Link href={"/"}>
                  <Image
                  src={"/images/Layer 11.png"}
                  alt={"TYC Africa Logo"}
                  width={80}
                  height={80}
                />
              </Link>
                
                <Separator orientation="vertical" className="hidden mx-4 md:block"/>
              </div>
              
              <div className="p-2 text-xl text-white">
                <p className="grid justify-end ">Join Us</p>
                <div className="flex gap-2">
                  <Icons.youtube className="md:h-9 md:w-9"/>
                  <Icons.twitter className="md:h-9 md:w-9"/>
                  <Icons.facebook className="md:h-9 md:w-9"/>
                  <Icons.Instagram className="md:h-9 md:w-9"/>
                  <Icons.linkedin className="md:h-9 md:w-9"/>

                </div>
              </div>
            </div>
          
          
        </div>

        <div className="self-stretch h-px bg-neutral-300" />

        <div className="inline-flex items-start self-stretch justify-start gap-12">
          <div className="flex-col items-start justify-start hidden gap-4 md:inline-flex grow shrink basis-0">
            <div className="inline-flex items-center justify-start gap-2 py-3">
              <div className="text-lg font-bold leading-tight text-white">
                Navigate
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                How we help
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Support us
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Partner with us
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                About us
              </div>
            </div>
          </div>

          <div className="flex-col items-start justify-start hidden gap-4 md:inline-flex grow shrink basis-0">
            <div className="inline-flex items-center justify-start gap-2 py-3">
              <div className="text-lg font-bold leading-tight text-white">
                Quick Links
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Donate
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Frequently Asked Questions
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Careers
              </div>
            </div>
            
          </div>

          <div className="flex-col items-start justify-start hidden gap-4 md:inline-flex grow shrink basis-0">
            <div className="inline-flex items-center justify-start gap-2 py-3">
              <div className="text-lg font-bold leading-tight text-white">
                Information Centre
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Become an Ambassador
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Media Centre
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="text-base font-medium leading-none text-white">
                Get in touch
              </div>
            </div>
            
          </div>


          <div className="flex w-full md:hidden">

          <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem value="item-1">
        <AccordionTrigger>Navigate</AccordionTrigger>
        <AccordionContent className="px-3 text-white bg-gray-500 rounded-md">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">How we help</Link>
                  </li>
                  <li>
                    <Link href="/">Support us</Link>
                  </li>
                  <li>
                    <Link href="/">Partner with us</Link>
                  </li>
                  <li>
                    <Link href="/">About us</Link>
                  </li>
                  
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Quick Links</AccordionTrigger>
        <AccordionContent className="px-3 text-white bg-gray-500 rounded-md">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Donate</Link>
                  </li>
                  <li>
                    <Link href="/">Frequently Asked Questions</Link>
                  </li>
                  <li>
                    <Link href="/">Careers</Link>
                  </li>
                  
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Information Centre</AccordionTrigger>
        <AccordionContent className="px-3 text-white bg-gray-500 rounded-md">
        <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Become a Youth Ambassador</Link>
                  </li>
                  <li>
                    <Link href="/">Media Centre</Link>
                  </li>
                  <li>
                    <Link href="/">Get in touch</Link>
                  </li>
                  
                  
                </ul>
        </AccordionContent>
      </AccordionItem>
          </Accordion>
          </div>
        </div>
        <div className="self-stretch h-px bg-neutral-300" />
        <div className="inline-flex items-start self-stretch justify-start gap-12">
          <div className="text-sm font-normal leading-tight text-white">
            TYC Africa Trust @ 2023. All rights reserved.
          </div>
          <div className="flex items-center justify-end h-10 gap-4 grow shrink basis-0">
            <div className="flex items-center justify-start gap-2 px-2 py-3">
              <div className="text-base font-medium leading-none text-white">
                <Link
                  className="underline" 
                  href={"/"}>
                Privacy Policy
                </Link>
                
              </div>
            </div>
            {/* <div className="flex items-center justify-start gap-2 px-2 py-3">
              <div className="text-base font-medium leading-none text-white">
                Twelve
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 px-2 py-3">
              <div className="text-base font-medium leading-none text-white">
                Thirteen
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
