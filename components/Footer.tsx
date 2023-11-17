import Link from "next/link";
import Image from "next/image";

const Footer = ({}) => {
  return (
    <>
      <div className="w-full px-20 py-12 bg-neutral-950 flex-col justify-between items-start gap-12 inline-flex">

        <div className="self-stretch justify-start items-center gap-12 inline-flex">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="justify-center items-center flex" />
              <div className="flex-col justify-center items-end inline-flex">

              <Link href={"/"}>
                <Image
                  src={"TYC-Logo-Large.svg"}
                  alt={"TYC Africa Logo"}
                  width={160}
                  height={144}
                />
              </Link>
                
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-end gap-4 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className=" px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 flex">
                <div className="w-6 h-6 relative" />
                <div className="text-zinc-500 text-base font-normal  leading-snug">
                  Enter your email to get the latest news...
                </div>
              </div>
              <div className="w-36 px-3 py-4 bg-blue-600 border-2 border-blue-600 justify-center items-center flex">
                <div className="px-4 justify-center items-center gap-2.5 flex">
                  <div className="text-white text-base font-medium  leading-none tracking-wide">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch h-px bg-neutral-300" />

        <div className="self-stretch justify-start items-start gap-12 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="py-3 justify-start items-center gap-2 inline-flex">
              <div className="text-white text-lg font-bold  leading-tight">
                Navigate
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                How we help
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Support us
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Partner with us
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                About us
              </div>
            </div>
          </div>

          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="py-3 justify-start items-center gap-2 inline-flex">
              <div className="text-white text-lg font-bold  leading-tight">
                Quick Links
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Donate
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Frequently Asked Questions
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Careers
              </div>
            </div>
            
          </div>

          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="py-3 justify-start items-center gap-2 inline-flex">
              <div className="text-white text-lg font-bold  leading-tight">
                Information Centre
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Become an Ambassador
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Media Centre
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium  leading-none">
                Get in touch
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="self-stretch h-px bg-neutral-300" />
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
          <div className="text-white text-sm font-normal  leading-tight">
            TYC Africa Trust @ 2023. All rights reserved.
          </div>
          <div className="grow shrink basis-0 h-10 justify-end items-center gap-4 flex">
            <div className="px-2 py-3 justify-start items-center gap-2 flex">
              <div className="text-white text-base font-medium  leading-none">
                <Link
                  className="underline" 
                  href={"/"}>
                Privacy Policy
                </Link>
                
              </div>
            </div>
            {/* <div className="px-2 py-3 justify-start items-center gap-2 flex">
              <div className="text-white text-base font-medium  leading-none">
                Twelve
              </div>
            </div>
            <div className="px-2 py-3 justify-start items-center gap-2 flex">
              <div className="text-white text-base font-medium  leading-none">
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
