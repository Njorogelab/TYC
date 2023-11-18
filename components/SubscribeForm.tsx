import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SubscribeForm = ({}) => {
  return (
    <>
      <div className="  px-5 bg-[#3FE2D3] flex-col justify-center items-center gap-3 inline-flex">
        <div className="items-start self-stretch justify-center gap-8 px-4 py-12 md:inline-flex grow shrink basis-0 backdrop-blur-sm">
          
          <div className="inline-flex flex-col items-start justify-start gap-6 grow shrink basis-0">
            <div className="flex flex-col items-start self-stretch justify-center gap-2 md:h-60">
              
              <div className="flex flex-col items-start justify-start ">
                <div className="text-4xl font-bold md:text-5xl">
                  We&apos;re eager to keep you in the loop.
                </div>
              </div>
             
              <div className="text-3xl font-normal md:h-28 text-teal-950">
                If you’d like to stay updated with our latest news and info, subscribe today
              </div>
            </div>
          </div>
          
          <div className="inline-flex flex-col items-center justify-start gap-4 mt-4 grow shrink basis-0">
            <div className="inline-flex items-center self-stretch justify-start h-12 gap-2 px-4 py-3 ">
              
              <Input placeholder="First name"/>
            </div>
            <div className="inline-flex items-center self-stretch justify-start h-12 gap-2 px-4 py-3 ">
              
              <Input placeholder="Last name"/>
            </div>
            <div className="inline-flex items-center self-stretch justify-start gap-4">
              <div className="flex items-center justify-start h-12 gap-2 px-4 py-3 grow shrink basis-0 ">
                
                
                <Input placeholder="Email" type="email"/>
              </div>
              <div className="flex items-center justify-center px-3 py-4 ">
                <div className=" justify-center items-center gap-2.5 flex">
                  
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
            </div>
            <div className="h-20 text-center ">
              <span className="text-xl font-normal leading-7 ">
                To understand how we will store and use your details please see
                our{" "}
              </span>
              <span className="text-xl font-normal leading-7 underline ">
                privacy policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
