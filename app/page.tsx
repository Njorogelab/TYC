import AnnualConferenceCard from '@/components/AnnualConferenceCard'
import GetInTouchCard from '@/components/GetInTouchCard'
import Hero from '@/components/Hero'
import HeroText from '@/components/HeroText'
import LandingSection1 from '@/components/LandingSection1'
import OpportunitiesCard1 from '@/components/OpportunitiesCard1'
import MoretoExplore from '@/components/MoretoExplore'
import SubscribeForm from '@/components/SubscribeForm'
import Image from 'next/image'
import SupportOurWorkCard from '@/components/SupportOurWorkCard'


export default function Home() {
  return (
    <>
    <main className="flex flex-col  w-full px-1 ">
      <div className=" w-full  text-sm lg:flex flex-col ">

       <Hero/> 
       
      </div>

    </main>
    <div className=" w-full   lg:flex">
        <HeroText/>
      </div>

    <section className='block px-10 py-8 bg-[#3FE2D3] min-h-[570px]'>
      <div className='text-start'>
        <LandingSection1/>
      </div>
    </section>

    <section className='px-10 py-8 bg-red-700 min-h-[600px]'>
          <div className=''>
            <AnnualConferenceCard/>
          </div>
        </section>

    <section className='bg-[#0E3930] max-w-max'>
      <div className=''>
        <OpportunitiesCard1/>
      </div>
    </section>

    <section className='block px-10 py-8 min-h-[575px]'>
      <div className='text-start'>
        <SupportOurWorkCard/>
      </div>
    </section>

    <section className=''>
      <div className=''>
        <MoretoExplore/>
      </div>
    </section>


    <section className=''>
      <div className=''>
        <GetInTouchCard/>
      </div>
    </section>

    <section className=''>
      <div className=''>
        <SubscribeForm/>
      </div>
    </section>



    </>
  )
}
