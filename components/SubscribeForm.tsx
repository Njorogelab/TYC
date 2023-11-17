import { FC } from "react";

const SubscribeForm = ({}) => {
  return (
    <>
      <div className="  px-5 bg-[#3FE2D3] flex-col justify-center items-center gap-3 inline-flex">
        <div className="inline-flex items-start self-stretch justify-center gap-8 px-4 py-12 grow shrink basis-0 backdrop-blur-sm">
          <div className="inline-flex flex-col items-start justify-start gap-6 grow shrink basis-0">
            <div className="flex flex-col items-start self-stretch justify-center gap-2 h-60">
              <div className="flex flex-col items-start self-stretch justify-start gap-1 h-14 bg-blue-950">
                <div className="self-stretch text-5xl font-bold leading-10 text-amber-50">
                  {" "}
                  We&apos;re eager to keep you{" "}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-1 bg-blue-950">
                <div className="self-stretch text-5xl font-bold leading-10 text-amber-50">
                  {" "}
                  in the loop.
                </div>
              </div>
              <div className="text-3xl font-normal leading-10 text-center  h-28 text-teal-950">
                If you’d like to Stay updated with our latest news and info.
                subscribe today
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-center justify-start gap-4 grow shrink basis-0">
            <div className="inline-flex items-center self-stretch justify-start h-12 gap-2 px-4 py-3 border-b bg-slate-100 border-neutral-300">
              <div className="text-base font-normal leading-snug text-zinc-500">
                First name
              </div>
            </div>
            <div className="inline-flex items-center self-stretch justify-start h-12 gap-2 px-4 py-3 border-b bg-slate-100 border-neutral-300">
              <div className="text-base font-normal leading-snug text-zinc-500">
                Last Name
              </div>
            </div>
            <div className="inline-flex items-center self-stretch justify-start gap-4">
              <div className="flex items-center justify-start h-12 gap-2 px-4 py-3 border-b grow shrink basis-0 bg-slate-100 border-neutral-300">
                <div className="relative w-6 h-6" />
                <div className="text-base font-normal leading-snug text-zinc-500">
                  Enter your email...
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
