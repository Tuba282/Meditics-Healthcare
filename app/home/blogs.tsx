import Image from "next/image";
import React from "react";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";


type BlogPost = {
    id: string;
    title: string;
    date: string; // e.g., "11 March 2025"
    category: string; // e.g., "Event"
    image: string;
    href?: string;
};

const posts: BlogPost[] = [
    {
        id: "1",
        title: "The Medical Minute Quick Tips for Better Living",
        date: "11 March 2025",
        category: "Event",
        image:
            "/blog-2.jpg",
        href: "#",
    },
    {
        id: "2",
        title: "Healthy Habits for Busy Professionals",
        date: "11 March 2025",
        category: "Event",
        image:
            "/blog-1.jpg",
        href: "#",
    },
    {
        id: "3",
        title: "Ask the Doctor Real Answers, Real Care",
        date: "11 March 2025",
        category: "Event",
        image:
            "/blog-3.jpg",
        href: "#",
    },
];

const BlogSection = () => {
    return (
        <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
            <Image src='https://meditics.temptics.com/assets/img/blog-vector.svg' width={300} height={300} className="absolute top-0 lg:-top-10 right-0 lg:-right-30 transition duration-300 group-hover:scale-[1.03]" alt="Doctor" />
            <Image src='https://meditics.temptics.com/assets/img/blog-vector.svg' width={300} height={300} className="absolute top-0 lg:-top-10 right-0 lg:-right-30 transition duration-300 group-hover:scale-[1.03]" alt="Doctor" />
                           
                            

            {/* Header */}
            <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
                <span className='w-40  p-1 px-3 text-sm hidden md:flex justify-center items-center gap-3 text-blue-700  rounded-full border-1 border-blue-700 font-semibold'><BsHeartFill /> Doctor`s Blog</span>
                
                    
                <h2 className="text-2xl  sm:text-4xl mt-5 font-bold leading-tight w-full max-w-4xl">
                    Your Health, My Words.
                </h2>
            </div>

            {/* Cards */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="group w-[300px]  relative overflow-hidden rounded-xl border border-slate-200 bg-[#F2F2F2] shadow-sm transition hover:shadow-[0_10px_24px_rgba(2,6,23,0.08)]"
                    >
                        {/* Image wrapper */}
                        <div className="relative">
                            <div className="block overflow-hidden">
                                <Image src={post.image} width={300} height={300} className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]" alt="Doctor" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative flex h-full flex-col p-5">

                            <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-slate-900">
                                {post.title}
                            </h3>
                            <div className="flex justify-between items-center mt-3 mb-9">
                                <p className="text-sm flex justify-center items-center gap-2 tracking-wide text-slate-500">
                                    <HiMiniCalendarDateRange />
                                    {post.date}
                                </p>
                                <p className="text-sm  flex justify-center items-center gap-2 tracking-wide text-slate-500">
                                    <CiMail />
                                    {post.category}
                                </p>
                            </div>

                            <div className=" p-3  absolute bottom-0 w-full left-0 rounded-b-xl bg-[#041C33]">
                                <a
                                    href={post.href || "#"}
                                    className="flex justify-center gap-3 items-center text-center  text-sm font-semibold font-sans text-white hover:text-blue-800 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                >
                                    READ MORE
                                    <HiOutlineArrowTrendingUp className='text-2xl font-bold' />
                                </a>
                            </div>
                        </div>
                        {/* Focus ring for whole card when focused via keyboard on link */}
                        <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-blue-500 ring-offset-2 ring-offset-white transition group-focus-within:ring-2" />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
