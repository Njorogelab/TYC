import {FC} from 'react'
import Image from 'next/image'
import { Icons } from './Icons'
import { Button } from './ui/button'

const LandingSection1 = ({}) => {
   return <>
    <div className=' block'>
    <div className='relative flex items-center '>

        <div className='absolute h-full w-[55%]'>
            <div className='absolute top-0 left-0 h-full w-full '>
                <div className='opacity-1 overflow-hidden  '>
                    <Image className='border' src={'/images/section.jpg'} alt={'TYC members standing together'} width={720} height={994}></Image>
                </div>
            </div>
        </div>

        <div className='ml-[50%] w-1/2 z-10 border-b-4 border-b-black bg-white px-4 relative top-10 flex items-center flex-col'>
            <div className='font-semibold py-3'>
                <h2 className='text-2xl px-2 text-center'>Unlocking Opportunities for Youth Success</h2>
            </div>

            <div className='font-normal py-3 px-3 text-xl grid gap-3'>
                <div className='relative  whitespace-pre-wrap text-center'>
                    <p>
                    Embarking on life's journey can be a challenge, but TYC Africa Trust is here to guide you through it. Regardless of the obstacles you face, know that we offer you steadfast support.
                    </p>
                </div>
                <div className='relative  whitespace-pre-wrap text-center'>
                    <p>
                    Taking that first step is essential, and TYC Africa Trust is your trusted partner in that endeavor. 
                    </p>
                </div>
                <div className='relative  whitespace-pre-wrap text-center'>
                    <p>
                    We're here to provide the guidance you need, even in the most trying times. Countless young individuals have started their journeys with TYC Africa Trust. Could you be next?
                    </p>
                </div>
            </div>
            
            <div className='flex items-center pb-4'>
            
            <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(63,226,211,1)] hover:shadow-[15px_8px_0px_rgba(63,226,211,1)]'>
                <span>Kick things off</span>
                <Icons.right/>
            </Button>
           </div>
           
        </div>
    </div>
    </div>
   </>
}

export default LandingSection1