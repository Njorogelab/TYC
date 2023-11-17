import Link from "next/link";
import Image from "next/image";

const Footer = ({}) => {
  return (
    <>
      <div className="inline-flex flex-col items-start justify-between w-full gap-12 px-20 py-12 bg-neutral-950">

        <div className="inline-flex items-center self-stretch justify-start gap-12">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="inline-flex items-start justify-start gap-1">
              <div className="flex items-center justify-center" />
              <div className="inline-flex flex-col items-end justify-center">

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
          <div className="inline-flex flex-col items-end justify-center gap-4 grow shrink basis-0">
            <div className="inline-flex items-center justify-start gap-4">
              <div className="flex items-center justify-start gap-2 px-4 py-3 border-b bg-slate-100 border-neutral-300">
                <div className="relative w-6 h-6" />
                <div className="text-base font-normal leading-snug text-zinc-500">
                  Enter your email to get stay up to date with us
                </div>
              </div>
              <div className="flex items-center justify-center px-3 py-4 bg-blue-600 border-2 border-blue-600 w-36">
                <div className="px-4 justify-center items-center gap-2.5 flex">
                  <div className="text-base font-medium leading-none tracking-wide text-white">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch h-px bg-neutral-300" />

        <div className="inline-flex items-start self-stretch justify-start gap-12">
          <div className="inline-flex flex-col items-start justify-start gap-4 grow shrink basis-0">
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

          <div className="inline-flex flex-col items-start justify-start gap-4 grow shrink basis-0">
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

          <div className="inline-flex flex-col items-start justify-start gap-4 grow shrink basis-0">
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
