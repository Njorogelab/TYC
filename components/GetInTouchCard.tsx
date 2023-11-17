import { FC } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

const GetInTouchCard = ({}) => {
  return (
    <div>
      <div className=" p-20 bg-violet-100 justify-start items-center gap-20 inline-flex">
        <div className="py-8 flex-col justify-start items-center gap-16 inline-flex">
          <div className="self-stretch h-40 flex-col justify-start items-start gap-12 flex">
            <div className="self-stretch h-40 flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch text-center text-zinc-800 text-5xl font-bold  leading-10">
                Get in touch
              </div>
              <div className=" text-center text-zinc-800 text-4xl font-normal  leading-10">
                Want to know how we can be of service? Share your thoughts with
                us!
              </div>
            </div>
          </div>
          <div className=" justify-between items-center inline-flex">
            <div className="w-80 h-14 relative">
              <div className="  absolute flex flex-col justify-center items-center gap-3.5 ">
                
                <div className="flex items-center pb-4">
                  <Button className="flex h-auto justify-between  px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(63,226,211,1)] hover:shadow-[15px_8px_0px_rgba(63,226,211,1)]">
                  <Icons.phone className="h-11 w-11 stroke-pink-600" />
                    <div className="flex-col flex">
                      <span className="  text-2xl font-medium  leading-normal tracking-wide">
                        Call us
                      </span>
                      <span className=" text-xl font-medium  leading-tight tracking-wide">
                        254-7000000
                      </span>
                    </div>
                    
                  </Button>
                </div>

              </div>
             
            </div>
            <div className="w-64 h-14 relative">
              <div className="w-44 left-[87px]  absolute flex-col justify-start items-start gap-0.5 inline-flex">

              <div className="flex items-center pb-4">
                  <Button className="flex h-auto justify-between  px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(63,226,211,1)] hover:shadow-[15px_8px_0px_rgba(63,226,211,1)]">
                  <Icons.whatsapp />
                    <div className="flex-col flex">
                      <span className="  text-2xl font-medium  leading-normal tracking-wide">
                        WhatsApp
                      </span>
                      <span className=" text-xl font-medium  leading-tight tracking-wide">
                        Launch chat
                      </span>
                    </div>
                    
                  </Button>
                </div>

               
              </div>
            </div>
          </div>

          <div className=" text-center mt-4">
            <span className="text-zinc-800 text-3xl font-normal  leading-10">
              We’re open on 254-700 000 000 from 9 am to 6 pm, Monday to Friday.
              <br />
              Outside these hours, you can{" "}
            </span>
            <span className="text-zinc-800 text-3xl font-normal  underline leading-10">
              send us an email
            </span>
            <span className="text-zinc-800 text-3xl font-normal  leading-10">
              {" "}
              and we’ll get back to you when we’re back online.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchCard;
