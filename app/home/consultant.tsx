import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { HiArrowRightCircle, HiOutlineArrowTrendingUp } from "react-icons/hi2";

const Consultant = () => {
    return (
        <div
            className="w-full my-10 flex justify-center items-center md:justify-between gap-8 flex-col-reverse md:flex-row bg-[#0A1F3D]">


            <div className="w-full md:w-[50%] md:min-h-[450px] lg:px-25 lg:py-15 flex flex-col gap-8  p-5 items-start">
                <div className="flex flex-col gap-7 text-white" id='consultant'>
                    <span className='w-70  p-1 px-3 text-sm hidden md:flex justify-center items-center gap-3 text-blue-700  rounded-full border-1 border-blue-700 font-semibold'><BsHeartFill /> Your Health, Your Convenience</span>

                    <div className="text flex flex-col">
                        <h1 className="text-2xl text-white sm:text-4xl mt-5 font-bold leading-tight w-full max-w-4xl ">Consult Your Doctor Online — Anytime, Anywhere</h1>
                    </div>
                    <p className='text-xs text-gray-500'>Say goodbye to long queues and unnecessary travel. With our secure video consultation service, you can now talk to experienced doctors from the comfort of your home.</p>
                    <div className="flex items-center gap-6 text-sm">
                        <HiArrowRightCircle className='text-blue-700 text-md' />
                        <div className="  text-sm">
                            Speak with certified specialists in real time
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <HiArrowRightCircle className='text-blue-700 text-md' />
                        <div className="  text-sm">
                            Easy appointment booking via mobile or web
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <HiArrowRightCircle className='text-blue-700 text-md' />
                        <div className="  text-sm">
                            Private, secure, and confidential video calls
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <HiArrowRightCircle className='text-blue-700 text-md' />
                        <div className="  text-sm">
                            Available 7 days a week, including evenings.
                        </div>
                    </div>


                </div>
                <Button variant="outline" className=" flex gap-2 border-none py-5! px-4 rounded-sm hover:bg-[var(--totaGreen)] bg-[var(--lightBlue)] hover:text-black text-white">Book a video call <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></Button>

            </div>


            <div className="w-full md:w-[50%] md:min-h-[450px] p-5 md:p-15 relative">
                <Image src="/video-call-1.png" width={300} height={300} className="w-[320px] h-[550px] z-2!" alt="Doctor" />
                <Image src="/video-call-2.png" width={300} height={300} className="w-[320px] h-[550px] hidden md:flex absolute top-20 right-30 z-0!" alt="Doctor" />

            </div>

        </div>
    )
}

export default Consultant