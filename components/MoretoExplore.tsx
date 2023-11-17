import { FC } from "react";

const MoretoExplore = ({}) => {
  return (
    <>
      <div className="w-full px-20 py-14 bg-[#810E0E] flex-col justify-start items-center inline-flex">
        <div className="h-14 flex-col justify-start items-start gap-12 flex">
          <div className="self-stretch h-14 flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-white text-5xl font-bold  leading-10">
              More to explore
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 px-14 py-20 justify-start items-start gap-24">
          <div className="w-96 h-36 relative bg-amber-50 border-b-8 border-black">
            <div className="w-72 h-16 left-0 top-[54px] absolute font-semibold text-4xl   leading-10 tracking-wide">
              Partner with us
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
          <div className="w-96 h-36 relative bg-amber-50 border-b-8 border-black">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute  text-4xl font-semibold  leading-10 tracking-wide">
              Knowledge hub
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
          <div className="w-96 h-36 relative bg-amber-50 border-b-8 border-black">
            <div className="w-72 h-16 left-[12px] top-[32px] absolute text-4xl font-semibold  leading-10 tracking-wide">
              Refer a young person
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
          <div className="w-96 h-36 relative bg-amber-50 border-b-8 border-black">
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
