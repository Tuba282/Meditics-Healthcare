"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Banner from "@/app/banner";
import { Button } from "@/components/ui/button";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const blogPosts = [
    {
        title: "The Role of Physical Therapy in Recovery",
        author: "Admin",
        date: "Sep 11, 2025",
        readTime: "6 Min Read",
        text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
        comments: 15,
        img: "https://meditics.temptics.com/assets/img/blog-wide-1.jpg",
    },
    {
        title: "The Power of Volunteers in Patient Recovery",
        author: "Admin",
        date: "Sep 10, 2025",
        readTime: "3 Min Read",
        text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
        comments: 4,
        img: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg",
    },
    {
        title: "The Power of Volunteers in Patient Recovery",
        author: "Admin",
        date: "Sep 10, 2025",
        readTime: "8 Min Read",
        text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
        comments: 15,
        img: "https://meditics.temptics.com/assets/img/blog-wide-3.jpg",
    },
    {
        title: "The Role of Physical Therapy in Recovery",
        author: "Admin",
        date: "Sep 11, 2025",
        readTime: "6 Min Read",
        text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
        comments: 15,
        img: "https://meditics.temptics.com/assets/img/blog-wide-1.jpg",
    },
    {
        title: "The Power of Volunteers in Patient Recovery",
        author: "Admin",
        date: "Sep 10, 2025",
        readTime: "3 Min Read",
        text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
        comments: 4,
        img: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg",
    },
    {
        title: "The Role of Physical Therapy in Recovery",
        author: "Admin",
        date: "Sep 11, 2025",
        readTime: "6 Min Read",
        text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
        comments: 15,
        img: "https://meditics.temptics.com/assets/img/blog-wide-1.jpg",
    },
];



const categories = [
    {
        title: "Health & Wellness",
        cat: "(08)",
    },
    {
        title: "Preventive Care",
        cat: "(11)",
    },
    {
        title: "Nutrition & Lifestyle",
        cat: "(18)",
    },
    {
        title: "Senior & Geriatric Care",
        cat: "(11)",
    },
    {
        title: "Medical Education & Tips",
        cat: "(07)",
    },
    {
        title: "Surgery & Recovery",
        cat: "(07)"
    }
];

const recentPosts = [
    {
        title: "A Day in the Life of a Hospital Nurse",
        date: "May 12, 2023",
        img: "https://meditics.temptics.com/assets/img/blog-2.jpg"
    },
    {
        title: "Choosing the Right Doctor for Your Needs",
        date: "May 18, 2023",
        img: "https://meditics.temptics.com/assets/img/blog-1.jpg"
    },
    {
        title: "Choosing the Right Doctor for Your Needs",
        date: "May 15, 2023",
        img: "https://meditics.temptics.com/assets/img/blog-3.jpg"
    },
];

const headings = [
    {
        heading: "01. Prioritize Balanced, Quick Meals",
        text: "Choose whole foods like fruits, veggies, lean proteins, and whole grains. Prepare meals in advance or opt for healthy takeout options. Avoid skipping meals — it leads to fatigue and poor focus."
    },
    {
        heading: "02. Move Throughout the Day",
        text: "If you can't hit the gym, aim for short bursts of activity: take the stairs, walk during calls, or do a 10-minute stretch between meetings. Small movements add up."
    },
    {
        heading: "03. Stay Hydrated",
        text: "Keep a water bottle at your desk or in your bag. Dehydration leads to tiredness, headaches, and brain fog — all productivity killers."
    },
    {
        heading: "04. Protect Your Sleep",
        text: "Avoid screens 30 minutes before bed, and aim for 7-8 hours of rest. Sleep is essential for immune function, focus, and long-term health."
    },
    {
        heading: "05. Manage Stress Effectively",
        text: "Try mindfulness apps, deep breathing, or short meditation sessions. Even five minutes can make a difference in your mental well-being."
    },
    {
        heading: "06. Schedule Health Checkups",
        text: "Try mindfulness apps, deep breathing, or short meditation sessions. Even five minutes can make a difference in your mental well-being."
    }
]

export default function DetailBlog() {
    const params = useParams();
    const id = Number(params?.id || 0);
    const post = blogPosts[id];

    return (
        <div>
            <Banner page={'Detail Blog'} />

            <div className="max-w-6xl flex flex-wrap justify-center items-center gap-8 mb-15 mt-16 bg-white mx-auto p-3">
                <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Blog Posts*/}
                    <div className="lg:col-span-2 space-y-8 " >
                        {post ? (
                            <>
                                <div className="rounded-lg shadow-sm bg-gray-100 overflow-hidden">
                                    <Image width={300} height={300} src={post.img} alt={post.title} className="w-full! h-full! object-cover" />
                                    <div className="lg:p-6 p-2 space-y-2">
                                        {/* Meta Info */}
                                        <div className="text-sm text-gray-500 flex items-center mb-5 gap-4">
                                            <span className="flex gap-1 text-white p-1 px-4 bg-[#0D6DFD] rounded-full">
                                                {/* Author Icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                    <path fill="white" d="M17.25 2.75H6.75A4.75 4.75 0 0 0 2 7.5v9a4.75 4.75 0 0 0 4.75 4.75h10.5A4.76 4.76 0 0 0 22 16.5v-9a4.76 4.76 0 0 0-4.75-4.75m-3.65 8.32a3.26 3.26 0 0 1-3.23 0L3.52 7.14a3.25 3.25 0 0 1 3.23-2.89h10.5a3.26 3.26 0 0 1 3.23 2.89z" stroke-width="0.2" stroke="#040000" />
                                                </svg>
                                                By {post.author}
                                            </span>
                                            <span className="flex gap-1">
                                                <FaRegClock color="#B6B7B9" className="w-[19px] h-[19px]" />
                                                {post.readTime}
                                            </span>
                                            <span className="flex gap-3 items-center  ">
                                                <TfiEmail color="#B6B7B9" className="w-[19px] h-[19px]" />
                                                {post.comments} Comments
                                            </span>
                                        </div>

                                        {/* Title + Excerpt */}
                                        <h2 className="lg:text-3xl text-2xl font-bold text-[#041C33] transition">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-500 mt-2 mb-4" style={{ fontSize: "15px" }}>
                                            {post.text}
                                        </p>

                                    </div>
                                </div>
                                <div className="p-4 bg-blue-200 rounded border-b-2 border-blue-700 mt-4 mb-10" >
                                    This blog post hits the mark perfectly for our target audience — busy professionals who care about their health but struggle with time. — John Doe
                                </div>

                                {headings.map((heading, idx) => (
                                    <div key={idx} className="my-4">
                                        <h3 className="font-semibold text-2xl text-gray-800">{heading.heading}</h3>
                                        <p className="text-gray-700 text-sm">{heading.text}</p>
                                    </div>
                                ))}

                                <div className="w-full mt-5  mx-auto">
                                    {/* Form matching the provided image */}
                                    <form className="w-full max-w-xl bg-transparent p-0 grid grid-cols-1 gap-5">
                                        <h2 className="font-semibold text-3xl text-black mb-3">Leave a comment ...</h2>
                                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col">
                                                <label htmlFor="name" className="text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    className="w-full rounded px-4 py-3 bg-gray-100 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="email" className="text-gray-700 mb-1">Your Email <span className="text-red-500">*</span></label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="w-full rounded px-4 py-3 bg-gray-100 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="message" className="text-gray-700  mb-1">Message</label>
                                            <textarea
                                                id="message"
                                                placeholder="Messages"
                                                rows={5}
                                                className="w-full rounded px-4 py-3 bg-gray-100 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                            ></textarea>
                                        </div>
                                        <Button type="submit" className="w-40 flex gap-2 justify-center items-center py-4 rounded bg-[var(--lightBlue)] hover:bg-blue-700 text-white text-sm  mt-2">
                                            Send Message <HiOutlineArrowTrendingUp className="text-xl font-bold" />
                                        </Button>
                                    </form>
                                </div>
                            </>

                        ) :
                            (
                                <div className="w-full h-screen flex items-center justify-center p-10 text-center font-bold text-4xl text-blue-950">Blog not found.</div>
                            )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8 p-2 hidden lg:block">
                        {/* Search */}
                        <div className="bg-[#F2F2F2] rounded-lg  p-4" >
                            <div className="flex bg-white  lg:justify-between lg:items-start rounded-full p-2  hover:shadow-md">
                                <input
                                    type="text"
                                    placeholder="Search Here"
                                    className="w-full px-1 py-1   rounded-full focus:outline-none focus:ring-0 focus:ring-[#0d6dfd00]"
                                />
                                <button
                                    className="hover:bg-[#182E43] bg-[#0D6DFD] rounded-full text-white px-1 py-1 transition-colors duration-300"
                                >
                                    <CiSearch size={22} />
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-[#F2F2F2]  p-4 rounded-lg hover:shadow-md"  >
                            <h2 className="text-xl font-bold font-sans mb-4 text-[#041C33]" >Categories</h2>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {categories.map((cat, i) => (
                                    <li key={i} className="cursor-pointer flex justify-between">
                                        <span className="heading text-xs">{cat.title}</span>
                                        <span className="heading text-xs">{cat.cat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-[#F2F2F2] p-4 rounded-lg hover:shadow-md" >
                            <h3 className="text-lg font-semibold mb-4 text-[#041C33]">Recent Posts</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {recentPosts.map((post, i) => (
                                    <li key={i}>
                                        <Image width={300} height={300} src={post.img} alt="img" className="mb-4 rounded  w-full" />
                                        <span className="text-xs text-gray-500">{post.date}</span>
                                        <p className="font-medium heading mb-4 hover:text-[#0D6DFD] cursor-pointer">{post.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Left: Schedule Section */}
                        <section className="bg-[#112B58] relative  text-white lg:text-left md:text-left px-4 text-center rounded-xl shadow-md w-full md:w-[350px]"  >

                            {/* Background Image */}
                            <div className="absolute inset-0 z-0 opacity-10">
                                <Image width={30} height={30}
                                    src="https://meditics.temptics.com/assets/img/service-sidebar-cta-bg.jpg"
                                    alt="Background"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-bold font-sans pt-8 mb-4">Have Additional Questions?</h2>
                            <ul className="space-y-2  ">
                                <li className='py-2 mt-2 text-xm overflow-hidden '>
                                    <hr className='w-75 mx-auto border border-l-0 border-r-0 border-b-0 pt-3 border-t-gray-600' />
                                    3rd Avenue, 83 Manhattan, London, UK
                                </li>
                                <li className='hover:text-[#0D6DFD] text-white'>+1890 123 456</li>
                                <li className='hover:text-[#0D6DFD] text-sm'>support@example.com</li>
                                <li className='  pt-4 pb-8 text-sm'>
                                    {/* Appointment Button */}
                                    <button
                                        className="group hidden lg:flex items-center gap-2 text-[#041C33] text-sm bg-[#DBE9A1] hover:bg-[#041C33] hover:text-[#DBE9A1] px-5 py-3 rounded  transition-colors duration-300"
                                    >
                                        Contact Us
                                        <TiArrowForward className="w-[19px] h-[19px]" />
                                    </button>
                                </li>

                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

// <div className="max-w-3xl mx-auto py-10 px-4">
//     <h1 className="text-3xl font-bold mb-4 text-[#041C33]">{post.title}</h1>
//     <div className="flex items-center gap-4 text-gray-500 mb-6">
//         <span>By {post.author}</span>
//         <span>{post.date}</span>
//         <span>{post.readTime}</span>
//         <span>{post.comments} Comments</span>
//     </div>
//     <Image src={post.img} alt={post.title} width={800} height={400} className="rounded mb-6 w-full h-auto object-cover" />
//     <p className="text-lg text-gray-700 leading-relaxed">{post.text}</p>
// </div>