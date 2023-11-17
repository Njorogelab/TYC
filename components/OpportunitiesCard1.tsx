import { FC } from "react";

const OpportunitiesCard1 = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className=" grow shrink basis-0 p-20  flex-col justify-start items-center  text-white gap-16 flex">
          <div className=" flex-col justify-start items-start gap-12 flex">
            <div className="  flex-col justify-start items-center gap-2 flex">
              <div className=" text-center  text-[42px] font-bold  ">
                Explore and embrace opportunities for you
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="  border border-zinc-200 flex-col justify-start items-center gap-[5px] inline-flex">
              <img className="self-stretch h-[400px]" src="images/cardpicture1.png" />
              <div className="self-stretch  px-4 pt-6 pb-4 flex-col justify-start items-start gap-4 flex">
                <div className=" flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Get Inspired
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Develop life skills by joining our conferences, workshops,
                  seminars and mentorship programs
                </div>
              </div>
              <div className="p-4  justify-start items-start gap-4 inline-flex ">
                <div className=" pr-2 py-4 justify-center items-center gap-4 flex">
                  <div className="justify-center items-center flex">
                    <div className=" text-xl font-medium  underline leading-tight tracking-wide">
                      Discover your strength and confidence.
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col justify-start items-center gap-[5px] inline-flex ">
              <img className="self-stretch h-[400px]" src="images/cardpicture2.png" />

              <div className="self-stretch px-4 pt-6 pb-4 flex-col justify-start items-start gap-4 flex">
                <div className=" flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Get Empowered
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Work with us to discover internship opportunities, student
                  exchange programs and other campaigns in your chosen field.
                  
                </div>
              </div>

              <div className=" p-4 justify-start items-start gap-4 inline-flex ">
                <div className="grow shrink basis-0 h-12 pr-2 py-4 justify-between items-center flex">
                  <div className="justify-center items-center flex">
                    <div className=" text-xl font-medium  underline leading-tight tracking-wide">
                      Build skills for work
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col justify-start items-center gap-[5px] inline-flex ">
              <img className="self-stretch h-[400px]" src="images/cardpicture3.png" />
              <div className="self-stretch  px-4 pt-6 pb-4 flex-col justify-start items-start gap-4 flex">
                <div className=" flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Get Involved
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Join us in engaging initiatives to protect and preserve the
                  environment as well as develop our communities
                </div>
              </div>
              <div className=" p-4 justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 h-12 pr-2 py-4 justify-between items-center flex">
                  <div className="justify-center items-center flex">
                    <div className=" text-xl font-medium  underline leading-tight tracking-wide">
                      Explore activities
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
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
