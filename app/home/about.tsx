import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';

const About = () => {
    return (
        <div className="w-full overflow-hidden ">
            <div className="relative flex flex-col gap-6 xl:flex-row items-center max-w-8xl p-5 lg:px-20">
                    <Image src="https://meditics.temptics.com/assets/img/about-vector.svg" width={200} height={200} className="w-auto h-full! absolute bottom-0 right-0 object-contain" alt="Doctor" />

                <div className="w-full xl:w-[40%] flex justify-center" >
                    <Image src="/timing.png" width={200} height={200} className="w-100 h-full! object-contain" alt="Doctor" />
                </div>
                <div className="w-full xl:w-[60%] sm:p-10  z-3">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-center md:text-left  leading-tight " data-aos="fade-right" data-aos-duration="1500">
                        My Journey in Medicine
                    </h2>
                    <h3 data-aos="fade-right" data-aos-duration="1600"
                        className="mt-6 md:mt-10 text-sm text-center md:text-left text-gray-700 font-light">
                        I`m Dr. Tushar Raja a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care. With over 12 years of experience, I`ve had the privilege of treating thousands of patients with empathy, accuracy, and dedication.
                    </h3>
                    <h3 data-aos="fade-right" data-aos-duration="1600"
                        className="mt-6 md:mt-10 text-sm text-center md:text-left text-gray-700 font-light">
                        I strongly believe that medicine is not just about treating diseases, but about understanding people, building trust, and guiding them toward long-term wellness.
                    </h3>
                    <p className='flex gap-2 items-center mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed'><FaCircleCheck className='text-[#0d6dfd]' /><b>Doctors Motto or Belief: </b>Healing begins with listening.</p>
                    <div className="flex gap-3 items-center my-3">
                        <Button variant="outline" className="flex gap-2 border-none py-5! px-4 rounded-sm hover:bg-[var(--darkBlue)] bg-[var(--lightBlue)] hover:text-white">SEND MESSAGE <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></Button>
                        <Button variant="outline" className="hidden sm:flex gap-2 border-1 border-black text-black py-5! px-4 rounded-sm hover:bg-[#041C33] bg-transparent hover:text-white">VIDEO CALL <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></Button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About