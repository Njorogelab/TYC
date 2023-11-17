import Image from "next/image";
import { FC } from "react";

const OpportunitiesCard1 = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-16 p-20 text-white grow shrink basis-0">
          <div className="flex flex-col items-start justify-start gap-12 ">
            <div className="flex flex-col items-center justify-start gap-2 ">
              <div className=" text-center  text-[42px] font-bold  ">
                Explore and embrace opportunities for you
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="  border border-zinc-200 flex-col justify-start items-center gap-[5px] inline-flex">
             
              <Image src={"/images/cardpicture1.png"} alt={""} height={400} width={400}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Get Inspired
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Develop life skills by joining our conferences, workshops,
                  seminars and mentorship programs
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-4 p-4 ">
                <div className="flex items-center justify-center gap-4 py-4 pr-2 ">
                  <div className="flex items-center justify-center">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      Discover your strength and confidence.
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col justify-start items-center gap-[5px] inline-flex ">
              
              <Image  alt={""} src={"/images/cardpicture2.png"} height={400} width={400}></Image>

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Get Empowered
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Work with us to discover internship opportunities, student
                  exchange programs and other campaigns in your chosen field.
                  
                </div>
              </div>

              <div className="inline-flex items-start justify-start gap-4 p-4 ">
                <div className="flex items-center justify-between h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="flex items-center justify-center">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      Build skills for work
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col justify-start items-center gap-[5px] inline-flex ">
             

              <Image  alt={""} src={"/images/cardpicture3.png"} height={400} width={400}></Image>
              
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Get Involved
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Join us in engaging initiatives to protect and preserve the
                  environment as well as develop our communities
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-4 p-4 ">
                <div className="flex items-center justify-between h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="flex items-center justify-center">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      Explore activities
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OpportunitiesCard1;
