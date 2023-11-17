import {FC} from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Icons } from './Icons'

const SupportOurWorkCard = ({}) => {
   return <>
    <div className=' block'>
    <div className='relative flex items-center py-16'>

        <div className='absolute h-full w-[55%]'>
            <div className='absolute top-0 left-0 h-full w-full '>
                <div className='opacity-1 overflow-hidden  '>
                    <Image className='border' src={'/images/support.jpg'} alt={'TYC members being adviced'} width={720} height={994}></Image>
                </div>
            </div>
        </div>

        <div className='ml-[50%] w-1/2 z-10 border-b-4 border-b-blue-700 bg-white px-4 relative top-2  flex flex-col items-center py-3 border'>
            <div className='font-semibold py-3'>
            <div className="font-semibold py-3">
              <h2 className="text-2xl px-2 text-center">
                Support Our Work
              </h2>
            </div>
            <div className="font-semibold py-3">
              <h2 className="text-2xl px-2 text-center">
                Want to get involved?
              </h2>
            </div>
            </div>
            <div className='font-normal text-lg py-3 px-3 '>
                <div className='relative  whitespace-pre-wrap text-center'>
                    <p>
                    Become a part of our journey in empowering African youth!                     </p>
                </div>
                <div className='relative  whitespace-pre-wrap text-center'>
                    <p>
                    Your support matters. Whether you're keen on volunteering, partnering with us, or contributing to our mission, there's a place for your passion at TYC Africa Trust.                     </p>
                </div>
                <div className='relative  whitespace-pre-wrap text-center'>
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