"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Keyboard, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiOutlineArrowSmallRight ,HiOutlineArrowSmallLeft} from "react-icons/hi2";
import { TbArrowBigRightLines ,TbArrowBigLeftLines } from "react-icons/tb";

import Image from "next/image";

type Testimonial = {
    quote: string;
    name: string;
    role: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Aliquam erat volutpat. Curabitur ultrices, arcu vel pretium lacinia, purus mauris pharetra felis.",
        name: "Kathryn Murphy",
        role: "Medical Assistant",
        image: "/girlAvatar2.jpg",
    },
    {
        quote:
            "Aliquam erat volutpat. Curabitur ultrices, arcu vel pretium lacinia, purus mauris pharetra felis.",
        name: "Leslie Alexander",
        role: "Product Designer",
        image: "/girlAvatar2.jpg",
    },
    {
        quote:
            "Suspendisse potenti. Aenean sit amet eros ac mi tincidunt ornare. Morbi nec ex non nunc pretium.",
        name: "Cody Fisher",
        role: "Marketing Lead",
        image: "/girlAvatar2.jpg",
    },
    {
        quote:
            "Suspendisse potenti. Aenean sit amet eros ac mi tincidunt ornare. Morbi nec ex non nunc pretium.",
        name: "Cody Fisher",
        role: "Marketing Lead",
        image: "/girlAvatar2.jpg",
    },
    {
        quote:
            "Suspendisse potenti. Aenean sit amet eros ac mi tincidunt ornare. Morbi nec ex non nunc pretium.",
        name: "Cody Fisher",
        role: "Marketing Lead",
        image: "/girlAvatar2.jpg",
    },
    {
        quote:
            "Suspendisse potenti. Aenean sit amet eros ac mi tincidunt ornare. Morbi nec ex non nunc pretium.",
        name: "Cody Fisher",
        role: "Marketing Lead",
        image: "/girlAvatar2.jpg",
    },
    {
        quote:
            "Suspendisse potenti. Aenean sit amet eros ac mi tincidunt ornare. Morbi nec ex non nunc pretium.",
        name: "Cody Fisher",
        role: "Marketing Lead",
        image: "/girlAvatar2.jpg",
    },
];

const TestimonialsSlider = () => {
    // 
    return (
        <section className=" px-4 pt-6 pb-14 font-sans bg-[#F2F2F2]">
            <div className="mx-auto max-w-[1100px] mb-5 text-left">
                <span className="mb-2 inline-block rounded-full bg-[#e9f2ff] px-2.5 py-1 text-[12px] font-semibold tracking-wide text-[#0a66ff]">
                    Client`s Testimonials
                </span>
                <h2 className="m-0 text-[28px] leading-tight text-slate-900">
                    Clients Feedbacks
                </h2>
            </div>
            <div className=" transition-all duration-300 w-full  flex justify-end items-center px-5 md:px-20">
                <span className="tf-prev w-10 h-10 border-1 border-black hover:border-0 hover:bg-[#dbe9a1] flex justify-center items-center ms-4 rounded-full rotate-220">
                <TbArrowBigRightLines/>
                </span>
                <span className="tf-next w-10 h-10 border-1 border-black hover:border-0 hover:bg-[#dbe9a1] flex justify-center items-center ms-4 rounded-full -rotate-220">
                <TbArrowBigLeftLines/>
                </span>
            </div>

            <div className="relative pr-[92px]">

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
                    modules={[Navigation, Keyboard, FreeMode, Autoplay]}
                    speed={500}
                    navigation={{ prevEl: ".tf-prev", nextEl: ".tf-next" }}
                    breakpoints={{
                        0: { slidesPerView: 1.2, spaceBetween: 16 },
                        640: { slidesPerView: 1.6, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    className="relative"

                ><div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#F2F2F2] via-[#f2f2f200] to-[#F2F2F2] z-1"></div>
                    {testimonials.map((testi, idx) => (
                        <SwiperSlide key={idx} className=" transition-all duration-300">
                            <div className="relative w-full h-full rounded-xl  p-6 pt-16  overflow-hidden font-sans text-black text-[15px] italic flex flex-col justify-center items-center">
                                {/* Profile Image - positioned top-left */}
                                <div className="absolute top-10 w-60 bg-blue-700 text-white flex gap-3 items-center rounded-full p-3 overflow-hidden border border-slate-200">
                                    <Image
                                        src={testi.image}
                                        alt={testi.name} width={50} height={50}
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                    <div className="">
                                        <p className="text-[16px] font-bold not-italic ">{testi.name}</p>
                                        <p className="text-[13px]  not-italic">{testi.role}</p>
                                    </div>
                                </div>

                                {/* Name + Role */}


                                {/* Quote */}
                                <p className="leading-relaxed text-center my-4 pt-15 pb-7 px-7 rounded-xl shadow-md bg-white">
                                    “{testi.quote}”
                                </p>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
