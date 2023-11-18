import { FC } from "react";

const MoretoExplore = ({}) => {
  return (
    <>
      <div className="w-full md:px-20 py-14 bg-[#810E0E] flex-col justify-start items-center inline-flex">
        
        <div className="flex flex-col items-start justify-start gap-12 md:h-14">
          <div className="flex flex-col items-center self-stretch justify-start gap-2 md:h-14">
            <div className="self-stretch text-3xl font-bold leading-10 text-center text-white md:text-5xl">
              More to explore
            </div>
          </div>
        </div>
        
        <div className="grid items-start justify-start gap-5 py-5 md:gap-24 md:grid-cols-2 md:py-20 px-14">
          <div className="relative border-b-8 border-black w-96 h-36 bg-amber-50">
            <div className="w-72 h-16 left-0 top-[54px] absolute font-semibold text-4xl   leading-10 tracking-wide">
              Partner with us
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
          <div className="relative border-b-8 border-black w-96 h-36 bg-amber-50">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-4xl font-semibold  leading-10 tracking-wide">
              Knowledge hub
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
          <div className="relative border-b-8 border-black w-96 h-36 bg-amber-50">
            <div className="w-72 h-16 left-[12px] top-[32px] absolute text-4xl font-semibold  leading-10 tracking-wide">
              Refer a young person
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
          <div className="relative border-b-8 border-black w-96 h-36 bg-amber-50">
            <div className="w-80 h-16 left-[26px] top-[39px] absolute  text-4xl font-semibold  leading-10 tracking-wide">
              Frequently Asked Questions
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoretoExplore;
