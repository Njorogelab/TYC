import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

const AnnualConferenceCard = ({}) => {
  return (
    <>
      <div className=" block">
        <div className="relative flex items-center py-16">

          <div className="mr-[50%] w-1/2 z-10 border-b-4 border-b-black bg-white px-4 relative top-6 flex items-center flex-col">
            <div className="font-semibold py-3">
              <h2 className="text-2xl px-2 text-center">
                The Annual Youth Conference{" "}
              </h2>
            </div>
            <div className="font-semibold py-3">
              <h2 className="text-2xl px-2 text-center">
                Ready to join us?
              </h2>
            </div>
            <div className="font-normal text-lg py-3 px-3">
              <div className="relative  whitespace-pre-wrap text-center">
                <p>
                  Step into an unforgettable experience! Our Annual Youth
                  Conference brings together young minds from across Africa to
                  learn, share, and inspire. Dive into engaging workshops,
                  listen to insightful speakers, and connect with a diverse
                  community passionate about shaping the future. Discover how
                  you can be a part of this enriching event.
                </p>
              </div>
            </div>

            <div className='flex items-center pb-4'>
            
            <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(185,28,28,1)] hover:shadow-[15px_8px_0px_rgba(185,28,28,1)]'>
                <span>Register</span>
                <Icons.right/>
            </Button>
           </div>
           
          </div>

          <div className="absolute inset-y-0  right-0 h-full w-[55%]">
            <div className="absolute  h-full w-full ">
              <div className="opacity-1 overflow-hidden  ">
                <Image
                  className="border"
                  src={"/images/tyc.jpg"}
                  alt={"TYC members standing together"}
                  width={720}
                  height={994}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnualConferenceCard;
