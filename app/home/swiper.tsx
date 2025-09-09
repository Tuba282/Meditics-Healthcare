"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { ImQuotesRight } from "react-icons/im";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FreeMode, Autoplay, Keyboard } from 'swiper/modules';

export default function SwiperSlider() {
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true
                }}
                keyboard={{
                    enabled: true
                }}
                freeMode={true}
                modules={[FreeMode, Autoplay, Keyboard]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="relative overflow-hidden w-full h-full bg-[#23384C] rounded-xl p-6  flex flex-col itmes-center justify-between text-lg text-white  italic font-sans!">
                        My Mission is to treat every patient with care , respect and the higest standard of medical knowledge
                        <ImQuotesRight className='absolute -bottom-6 right-10 text-8xl text-[#1F4169]' />
                        <span className='font-semibold flex gap-1 text-[#dbe9a1] items-center'><TfiLayoutLineSolid className=' ' size={25} /> Robel Roy . USY</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden w-full h-full bg-[#23384C] rounded-xl p-6  flex flex-col itmes-center justify-between text-lg text-white  italic font-sans!">
                        My Mission is to treat every patient with care , respect and the higest standard of medical knowledge
                        <ImQuotesRight className='absolute -bottom-6 right-10 text-8xl text-[#1F4169]' />
                        <span className='font-semibold flex gap-1 text-[#dbe9a1] items-center'><TfiLayoutLineSolid className=' ' size={25} /> Robel Roy . USY</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden w-full h-full bg-[#23384C] rounded-xl p-6  flex flex-col itmes-center justify-between text-lg text-white  italic font-sans!">
                        My Mission is to treat every patient with care , respect and the higest standard of medical knowledge
                        <ImQuotesRight className='absolute -bottom-6 right-10 text-8xl text-[#1F4169]' />
                        <span className='font-semibold flex gap-1 text-[#dbe9a1] items-center'><TfiLayoutLineSolid className=' ' size={25} /> Robel Roy . USY</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
