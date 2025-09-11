// components/QualificationsAwards.tsx
import Image from "next/image";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

type Qualification = {
    institution: string;
    degree: string;
    duration: string;
};

const qualifications: Qualification[] = Array.from({ length: 6 }).map(() => ({
    institution: "Oxford University",
    degree: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
    duration: "Jan 2014 - Dec 2018",
}));

export default function Awards() {
    return (
        <section className="w-full bg-white relative">
            <Image src="https://meditics.temptics.com/assets/img/qualification-vector-1.svg" width={300} height={300} className="absolute top-0 left-0" alt="Doctor" />
            <Image src="https://meditics.temptics.com/assets/img/qualification-vector-2.svg" width={300} height={300} className="absolute top-0 right-0" alt="Doctor" />
                            
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12" id="awards">
                {/* Label */}
                <div className="flex justify-center">
                    <span className='w-50  p-1 my-3 px-3 text-sm hidden md:flex justify-center items-center gap-3 text-blue-700  rounded-full border-1 border-blue-700 font-semibold'><BsHeartFill /> My Qualification</span>

                </div>

                {/* Title */}
                <h2 className="mt-3 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                    My Qualification &amp; Awards
                </h2>

                {/* Qualification cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {qualifications.map((q, idx) => (
                        <div
                            key={idx}
                            className=" grid lg:flex items-center bg-gray-200 justify-between gap-4 rounded-xl  px-5 py-4 shadow-sm"
                        >
                            <div className="">
                                <div className="text-sm font-semibold text-gray-900 truncate">
                                    {q.institution}
                                </div>
                                <div className="text-xs text-gray-500">{q.duration}</div>
                            </div>
                            <span className="w-[1px] h-full bg-gray-800/20 rounded-2xl"></span>
                            <div className="flex-1">
                                <div className="text-sm sm:text-base font-bold text-gray-900">
                                    {q.degree}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Awards strip */}
                <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between gap-6 p-3 relative">
                        <div className="flex overflow-hidden justify-center items-center gap-6 sm:gap-8">
                            {/* Award icons (monochrome navy) */}
                            <Image src="https://meditics.temptics.com/assets/img/award-1.svg" width={300} height={300} className="w-6 h-6 md:w-25 md:h-25" alt="Doctor" />
                            <Image src="https://meditics.temptics.com/assets/img/award-2.svg" width={300} height={300} className="w-6 h-6 md:w-25 md:h-25" alt="Doctor" />
                            <Image src="https://meditics.temptics.com/assets/img/award-3.svg" width={300} height={300} className="w-6 h-6 md:w-25 md:h-25" alt="Doctor" />
                            <Image src="https://meditics.temptics.com/assets/img/award-4.svg" width={300} height={300} className="w-6 h-6 md:w-25 md:h-25" alt="Doctor" />
                            <Image src="https://meditics.temptics.com/assets/img/award-5.svg" width={300} height={300} className="w-6 h-6 md:w-25 md:h-25" alt="Doctor" />
                            <Image src="https://meditics.temptics.com/assets/img/award-6.svg" width={300} height={300} className="w-6 h-6 md:w-25 md:h-25" alt="Doctor" />

                        </div>


                        <div className=" absolute top-0 right-0 p-4 w-50 h-full bg-blue-700 rounded-r-xl hidden  lg:flex justify-between items-center gap-3 text-white">View All Awards <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
