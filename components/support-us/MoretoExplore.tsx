import { FC } from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";

const MoretoExplore = ({}) => {
  return (
    <>
      <div className="w-full md:px-20 py-14 bg-[#810E0E] flex-col justify-start items-center inline-flex">
        
        <div className="flex flex-col items-start justify-start gap-12 md:h-14 mb-6">
          <div className="flex flex-col items-center  self-stretch justify-start gap-2 md:h-14">
            <div className="self-stretch text-3xl font-bold text-white leading-10 text-center  md:text-5xl">
              More ways to support us
            </div>
            <div className="self-stretch  font-bold leading-10 text-center md:text-2xl">
              <p className=" my-3 font-bold leading-10 text-center text-white md:text-2xl">
              Contact us using the contact details above and we&apos;ll be happy to help. Or check out the following pages to learn more about how TYC Africa Trust can help you.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid items-start justify-start gap-5 py-5 md:gap-24 md:grid-cols-2 md:py-20 px-14">
          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12 text-4xl font-semibold  leading-10 tracking-wide">
              Large gift donation
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>


          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12 text-4xl font-semibold  leading-10 tracking-wide">
              Philanthropic giving
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>


          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12  text-4xl font-semibold  leading-10 tracking-wide">
              Partner wih us
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          
          <div className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]">
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12 text-4xl font-semibold  leading-10 tracking-wide">
              Other ways to give
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoretoExplore;
