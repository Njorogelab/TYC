"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "./Icons";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("help");

  return (
    <div>
      <Sheet>
        <SheetTrigger className="flex items-center gap-3 ">
          Menu <Icons.menu />
        </SheetTrigger>

        <SheetContent className="border rounded-lg scroll-auto" side="top">
          <div className="grid grid-flow-col gap-2 rounded grid-col-3">
            
            <div className="flex-col gap-2 p-3 border-r ">
              <div
                onMouseEnter={() => setActiveTab("help")}
                // onMouseLeave={() => setActiveTab("null")}
                className="hover:bg-[#F1F5F9] rounded-md p-2"
              >
                <p className="font-[700]">How we help</p>
                <p className="text-[#64748B]">
                  Our initiatives are designed to designed to foster personal
                  growth, leadership, and community engagement.
                </p>
              </div>

              <div
                onMouseEnter={() => setActiveTab("support")}
                // onMouseLeave={() => setActiveTab("null")}
                id="support"
                className="hover:bg-[#F1F5F9] rounded-md p-2"
              >
                <p className="font-[700]">Support</p>
                <p className="text-[#64748B]">
                  Explore our programs, read inspiring stories, and consider
                  joining us in our mission to empower the next generation.
                </p>
              </div>

              <div
                onMouseEnter={() => setActiveTab("partner")}
                // onMouseLeave={() => setActiveTab("null")}
                id="partner"
                className="hover:bg-[#F1F5F9] rounded-md p-2"
              >
                <p className="font-[700]">Partner with us</p>
                <p className="text-[#64748B]">
                  Explore our programs, read inspiring stories, and consider
                  joining us in our mission to empower the next generation
                </p>
              </div>

              <div 
                onMouseEnter={() => setActiveTab("about")}
                // onMouseLeave={() => setActiveTab("null")}
                className="hover:bg-[#F1F5F9] rounded-md p-2">
                <p className="font-[700]">About us</p>
                <p className="text-[#64748B]">
                  Welcome to the heart of TYC Africa Trust, where our story
                  unfolds, and our commitment to youth empowerment comes to
                  life.
                </p>
              </div>

              <div 
                onMouseEnter={() => setActiveTab("resources")}
                // onMouseLeave={() => setActiveTab("null")}
                className="hover:bg-[#F1F5F9] rounded-md p-2">
                <p className="font-[700]">Resources at TYC Africa Trust</p>
                <p className="text-[#64748B]">
                  Discover a wealth of educational materials, insightful blogs,
                  and valuable downloads to support your journey of personal
                  growth and development.
                </p>
              </div>

              <div className="hover:bg-[#F1F5F9] rounded-md p-2">
                <p className="font-[700]">Contact us</p>
                <p className="text-[#64748B]">
                  Got questions about our programs, initiatives, or TYC Africa
                  Trust in general? We&apos;re here to provide answers and assistance
                </p>
              </div>
            </div>
            
            <div className="lg:w-80">

              <div id="help" style={{display: activeTab==='help'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Youth Development Hub</Link>
                  </li>
                  <li>
                    <Link href="/">Talent Discovery</Link>
                  </li>
                  <li>
                    <Link href="/">Resilience Building</Link>
                  </li>
                  <li>
                    <Link href="/">Community Outreach</Link>
                  </li>
                </ul>
              </div>

              <div id="support" style={{display: activeTab==='support'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Donate</Link>
                  </li>
                  <li>
                    <Link href="/">Become a Youth Ambassador</Link>
                  </li>
                  <li>
                    <Link href="/">Volunteer</Link>
                  </li>
                  <li>
                    <Link href="/">Take part in an event</Link>
                  </li>
                  <li>
                    <Link href="/">Legacy giving</Link>
                  </li>
                  <li>
                    <Link href="/">Large gifts</Link>
                  </li>
                  <li>
                    <Link href="/">More options</Link>
                  </li>
                </ul>
              </div>

              <div id="partner" style={{display: activeTab==='partner'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Non Governmental Institutions</Link>
                  </li>
                  <li>
                    <Link href="/">Government Institutions</Link>
                  </li>
                  <li>
                    <Link href="/">Education Institutes</Link>
                  </li>
                  <li>
                    <Link href="/">Businesses</Link>
                  </li>
                  <li>
                    <Link href="/">Get in touch</Link>
                  </li>
                </ul>
              </div>

              <div id="partner" style={{display: activeTab==='about'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Our mission</Link>
                  </li>
                  <li>
                    <Link href="/">Our latest initiatives</Link>
                  </li>
                  <li>
                    <Link href="/">Our history</Link>
                  </li>
                  <li>
                    <Link href="/">Our people</Link>
                  </li>
                  <li>
                    <Link href="/">Our impact stories</Link>
                  </li>
                  <li>
                    <Link href="/">Media centre</Link>
                  </li>
                  <li>
                    <Link href="/">Our core values</Link>
                  </li>
                  <li>
                    <Link href="/">Our events</Link>
                  </li>
                </ul>
              </div>

              <div id="partner" style={{display: activeTab==='resources'? 'block':'none'}}>
                <ul className="flex flex-col font-[700] underline gap-3">
                  <li>
                    <Link href="/">Education Materials</Link>
                  </li>
                  <li>
                    <Link href="/">Expert Advice</Link>
                  </li>
                  <li>
                    <Link href="/">Youth Perspectives</Link>
                  </li>
                  <li>
                    <Link href="/">Events calendar</Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            
            <div className="grid">

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='help'? 'grid':'none'}}>

                <div className="h-[16rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Join us in our Annual Youth Conference</p>
                </div>

                <div className="h-[16rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>

              <div id="support" style={{display: activeTab==='support'? 'grid':'none'}}>
                <div className="h-[16rem]  rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Learn more about volunteering</p>
                </div>
                <div className="h-[16rem]  rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='partner'? 'grid':'none'}}>

                <div className="h-[16rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Join us in our Annual Youth Conference</p>
                </div>

                <div className="h-[16rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='about'? 'grid':'none'}}>

                <div className="h-[16rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Join us in our Annual Youth Conference</p>
                </div>

                <div className="h-[16rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>

              <div id="help" className="flex-col h-auto gap-3" style={{display: activeTab==='resources'? 'grid':'none'}}>

                <div className="h-[16rem]  block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Join us in our Annual Youth Conference</p>
                </div>

                <div className="h-[16rem] block rounded">
                    <div className="h-full p-2 rounded bg-gradient-to-b from-[#DB4E66] via-[#A24688] to-[#4E3ABA]"></div>
                    <p className="underline">Make a positive impact on communities</p>
                </div>
              </div>
            </div>
            
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
