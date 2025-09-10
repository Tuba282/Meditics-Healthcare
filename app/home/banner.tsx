"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { FreeMode, Autoplay, Keyboard } from 'swiper/modules';




import { Button } from "@/components/ui/button";
import { BsHeartFill } from "react-icons/bs";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import Image from "next/image";

export default function Banner() {
    return (
        <section className="bg-[#0a1f3d] text-white flex justify-center p-2 md:p-10 items-center relative! overflow-hidden">
            <div className="absolute! top-0 left-0 object-cover bg-[url('https://meditics.temptics.com/assets/img/cta-bg.jpg')] opacity-5 bg-no-repeat bg-center"></div>
        
            <div className="w-[80%] h-full">

                <span className='w-80  py-1 my-3 px-3 text-sm hidden md:flex justify-center items-center gap-3 text-[#dbe9a1]  rounded-full border-1 border-[#dbe9a1] font-semibold'><BsHeartFill /> Do You Need Emergency Care</span>


                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-xl md:text-5xl text-center md:text-left font-bold mb-6">
                        Do You Have Health Problems
                    </h1>

                    <Button variant="outline" className="flex gap-2 border-none py-5! px-4 rounded-sm hover:bg-[var(--darkBlue)] bg-[var(--lightBlue)] hover:text-white">SEND MESSAGE <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></Button>

                </div>
                <br /><br />
                <div className=" h-[1px] bg-white/20" />
                <Swiper
                    loop={true}
                    slidesPerView={6}
                    spaceBetween={50}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}
                    keyboard={{
                        enabled: true
                    }}
                    freeMode={true}
                    modules={[FreeMode, Autoplay, Keyboard]}
                    className="mySwiper hidden! md:flex!">
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://meditics.temptics.com/assets/img/client-logo.svg" width={300} height={300} className="w-30! h-50! grayscale-100 hover:grayscale-0" alt="Doctor" />
                    </SwiperSlide>
                </Swiper>
            </div>
            </section>
    );
}
