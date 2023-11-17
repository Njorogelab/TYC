import { FC } from "react";

const SubscribeForm = ({}) => {
  return (
    <>
      <div className="  px-5 bg-[#3FE2D3] flex-col justify-center items-center gap-3 inline-flex">
        <div className="self-stretch grow shrink basis-0 px-4 py-12 backdrop-blur-sm justify-center items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-60 flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch h-14 bg-blue-950 flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-amber-50 text-5xl font-bold  leading-10">
                  {" "}
                  We're eager to keep you{" "}
                </div>
              </div>
              <div className="bg-blue-950 flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-amber-50 text-5xl font-bold  leading-10">
                  {" "}
                  in the loop.
                </div>
              </div>
              <div className=" h-28 text-center text-teal-950 text-3xl font-normal  leading-10">
                If you’d like to Stay updated with our latest news and info.
                subscribe today
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
            <div className="self-stretch h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-500 text-base font-normal  leading-snug">
                First name
              </div>
            </div>
            <div className="self-stretch h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-500 text-base font-normal  leading-snug">
                Last Name
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300 justify-start items-center gap-2 flex">
                <div className="w-6 h-6 relative" />
                <div className="text-zinc-500 text-base font-normal  leading-snug">
                  Enter your email...
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
            <div className=" h-20 text-center">
              <span className=" text-xl font-normal  leading-7">
                To understand how we will store and use your details please see
                our{" "}
              </span>
              <span className=" text-xl font-normal  underline leading-7">
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
