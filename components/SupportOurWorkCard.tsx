import {FC} from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Icons } from './Icons'

const SupportOurWorkCard = ({}) => {
   return <>
    <div className='block '>
    <div className='relative flex items-center py-16'>

        <div className='absolute h-full w-[55%]'>
            <div className='absolute top-0 left-0 w-full h-full '>
                <div className='overflow-hidden opacity-1 '>
                    <Image className='border' src={'/images/support.jpg'} alt={'TYC members being adviced'} width={720} height={994}></Image>
                </div>
            </div>
        </div>

        <div className='ml-[50%] w-1/2 z-10 border-b-4 border-b-blue-700 bg-white px-4 relative top-2  flex flex-col items-center py-3 border'>
            <div className='py-3 font-semibold'>
            <div className="py-3 font-semibold">
              <h2 className="px-2 text-2xl text-center">
                Support Our Work
              </h2>
            </div>
            <div className="py-3 font-semibold">
              <h2 className="px-2 text-2xl text-center">
                Want to get involved?
              </h2>
            </div>
            </div>
            <div className='px-3 py-3 text-lg font-normal '>
                <div className='relative text-center whitespace-pre-wrap'>
                    <p>
                    Become a part of our journey in empowering African youth!                     </p>
                </div>
                <div className='relative text-center whitespace-pre-wrap'>
                    <p>
                    Your support matters. Whether you&apos;re keen on volunteering, partnering with us, or contributing to our mission, there&apos;s a place for your passion at TYC Africa Trust.                     </p>
                </div>
                <div className='relative text-center whitespace-pre-wrap'>
                    <p>
                    Explore the diverse ways you can get involved and make a difference.                    </p>
                </div>
            </div>
           
           <div className='flex items-center pb-2'>
            
            <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                <span>Explore</span>
                <Icons.right/>
            </Button>
           </div>

        </div>
    </div>
    </div>
   </>
}

export default SupportOurWorkCard