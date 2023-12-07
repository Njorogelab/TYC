import Image from "next/image";
import { FC } from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import people from '@/public/images/cardpicture1.png'

const OpportunitiesCard1 = ({}) => {
  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 ">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          
        
          
          <div className="grid gap-4 md:grid-cols-2">

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={people} alt="people" sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: '400px',
        }} />

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Our Initiates
                  </div>
                </div>
                <div className="self-stretch text-xl font-normal  leading-[33.60px]">
                Discover the diverse array of initiatives driving our mission. From empowering youth development to fostering mental wellness and contributing to community outreach, explore the heart of our efforts.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/about-us'}>Learn more</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/cardpicture3.png"} alt={""} height={400} width={400}
              sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',
              }}/>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Our History
                  </div>
                </div>
                <div className="self-stretch text-xl font-normal  leading-[33.60px]">
                Dive into our rich history. Learn about the inception, growth, and milestones that define our path, shaping the present and paving the way for our future endeavors..
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/about-us'}>Learn more</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/photo5.jpg"} alt={""} height={400} width={400}
              sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',
              }}/>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Our Stories
                  </div>
                </div>
                <div className="self-stretch text-xl font-normal  leading-[33.60px]">
                Explore the compelling narratives and impactful stories that embody the essence of TYC Africa Trust. From transformational success stories to the narratives of change, our stories exemplify the spirit of our mission.             </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/about-us'}>Learn more</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/photo7.jpg"} alt={""} height={400} width={400}
              sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',
              }}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Our People
                  </div>
                </div>
                <div className="self-stretch text-xl font-normal  leading-[33.60px]">
                Meet the inspiring minds that shape the heart of TYC Africa Trust. Learn about the dedicated individuals behind our vision and their contributions to empowering youth and transforming communities            </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/about-us'}>Learn more</Link> <Icons.right/>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  items-center gap-[5px] ">
             
              <Image src={"/images/cardpicture2.png"} alt={""} height={400} width={400}
              sizes="100vw"
              // Make the image display full width
              style={{
                width: '100%',
                height: '400px',
              }}></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Events Calendar
                  </div>
                </div>
                <div className="self-stretch text-xl font-normal  leading-[33.60px]">
                Stay updated on our upcoming events, conferences, and gatherings. Dive into a calendar brimming with opportunities to connect, learn, and collaborate.            </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline flex justify-between w-full">
                     <Link href={'/about-us'}>Learn more</Link> <Icons.right/>
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
