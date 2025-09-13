"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Banner from "@/app/banner";
import { TiArrowForward } from "react-icons/ti";
import { FaArrowTrendUp, FaCircleChevronRight } from "react-icons/fa6";
import { useState } from "react";
// FAQItem for smooth transition
function FAQItem({ question, children }: { question: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b last:border-b-0 bg-gray-50 rounded-lg shadow p-2">
            <button
                type="button"
                className="flex justify-between items-center w-full cursor-pointer py-3 px-2 text-lg  focus:outline-none group"
                onClick={() => setOpen((v) => !v)}
            >
                {question}
                <span className={`ml-2 text-blue-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                    <FaArrowTrendUp />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="pl-2 pb-3 text-gray-500 text-sm">{children}</div>
            </div>
        </div>
    );
}

const services = [
    {
        id: 1,
        title: "Clinical Pathology",
        description: "Clinical pathology involves the analysis of bodily fluids and tissues.",
        image: "/service-1.jpg",
    },
    {
        id: 2,
        title: "Histopathology",
        description: "Histopathology examines tissue samples under a microscope to detect abnormalities.",
        image: "/service-2.jpg",
    },
    {
        id: 3,
        title: "Biochemistry",
        description: "Biochemistry tests measure chemical in blood and body fluids.",
        image: "/service-3.jpg",
    },
    {
        id: 4,
        title: "Hematology (Blood Tests)",
        description: "Hematology tests analyze blood components to detect anemia, infections.",
        image: "/service-4.jpg",
    },
    {
        id: 5,
        title: "Urine & Stool Analysis",
        description: "Urine and stool analysis help detect infections, digestive issues, kidney problems.",
        image: "/service-5.jpg",
    },
    {
        id: 6,
        title: "Hemoglobin (Hb)",
        description: "Hemoglobin (Hb) is a vital protein in red blood cells that carries oxygen within the body.",
        image: "/service-6.jpg",
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
export default function DetailService() {
    const params = useParams();
    const id = Number(params?.id || 0);
    const post = services[id];

    return (
        <>
            <Banner page={'detail service'} />

            <div className="max-w-6xl flex flex-wrap justify-center items-center gap-8 mb-15 mt-16 bg-white mx-auto p-3">
                <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Blog Posts*/}
                    <div className="lg:col-span-2 space-y-8 " >
                        {post ? (
                            <>
                                <div className="rounded-lg shadow-sm bg-gray-100 overflow-hidden">
                                    <Image width={500} height={500} src={post.image} alt={post.title} className="w-full! h-full! object-cover" />

                                </div>
                                <div className="p-4 bg-blue-200 rounded border-b-2 border-blue-700 mt-4 mb-10  font-sans italic" >
                                    This service hits the mark perfectly for our target audience — busy professionals who care about their health but struggle with time. <span className="font-semibold text-blue-500"> — John Doe</span>
                                </div>

                                {/* What We Offer Section */}
                                <div className=" mb-8 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-1 ">
                                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#041C33]">What We Offer:</h2>
                                        <ul className="space-y-3 text-base">
                                            <li className="flex items-start gap-2 text-sm">
                                                <FaCircleChevronRight className="text-md text-blue-500" />
                                                One-on-one virtual sessions with certified counselors
                                            </li>
                                            <li className="flex items-start gap-2 text-sm">
                                                <FaCircleChevronRight className="text-md text-blue-500" />
                                                Stress and anxiety management techniques
                                            </li>
                                            <li className="flex items-start gap-2 text-sm">
                                                <FaCircleChevronRight className="text-md text-blue-500" />
                                                Sleep improvement & energy-boosting strategies
                                            </li>
                                            <li className="flex items-start gap-2 text-sm">
                                                <FaCircleChevronRight className="text-md text-blue-500" />
                                                Personalized nutrition and wellness plans
                                            </li>
                                            <li className="flex items-start gap-2 text-sm">
                                                <FaCircleChevronRight className="text-md text-blue-500" />
                                                Habit-building for a healthier, more balanced life
                                            </li>
                                            <li className="flex items-start gap-2 text-sm">
                                                <FaCircleChevronRight className="text-md text-blue-500" />
                                                Confidential, judgment-free care
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-shrink-0  w-full md:w-56 flex justify-center md:justify-end">
                                        <Image src="https://meditics.temptics.com/assets/img/service-details-inner.jpg" alt="Counseling" width={220} height={180} className="rounded-xl object-cover w-full h-[160px] md:h-full!" />
                                    </div>
                                </div>

                                {/* Key Features Section */}
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#041C33]">Key Features:</h2>
                                    <ul className="space-y-3 text-base">
                                        <li className="flex items-start gap-2">
                                            <FaCircleChevronRight className="text-md text-blue-500" />
                                            <span className="font-semibold">Stress Reduction Coaching:</span>
                                            <span className="text-xs">Learn to manage pressure burnout, and daily anxiety with proven techniques</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaCircleChevronRight className="text-md text-blue-500" />
                                            <span className="font-semibold">Personalized Nutrition & Wellness Plans:</span>
                                            <span className="text-xs">Build healthier routines that support productivity and rest.</span>
                                        </li>
                                        <li className="flex items-start gap-2"><
                                            FaCircleChevronRight className="text-md text-blue-500" />
                                            <span className="font-semibold">Lifestyle Planning:</span>
                                            <span className="text-xs">Create sustainable habits for nutrition, exercise, and sleep.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaCircleChevronRight className="text-md text-blue-500" />
                                            <span className="font-semibold">One-on-One Counseling:</span>
                                            <span className="text-xs">Talk to licensed professionals in a private, secure online setting.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaCircleChevronRight className="text-md text-blue-500" />
                                            <span className="font-semibold">Mental Wellness Support:</span>
                                            <span className="text-xs">Gain tools to improve focus, mood, and overall life satisfaction.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Why It Matters Section */}
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#041C33]">Why It Matters:</h2>
                                    <p className="text-gray-700 text-sm">Improving your lifestyle isn`t just about avoiding illness — it`s about living better, feeling stronger, and thinking clearer every day.</p>
                                </div>

                                {/* FAQ Section */}
                                <div className=" mb-8">
                                    <div className="space-y-3">
                                        <FAQItem question="Do I need a diagnosis to book a session?">
                                            Anonsectetur adipiscing elit Aenean scelerisque augue vitae consequat. Jusque eget congue velit in cursus leo sodales eu turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.
                                        </FAQItem>
                                        <FAQItem question="Why Join Us as a Volunteer?">
                                            Volunteering gives you a chance to make a real difference in people&apos;s lives, gain valuable experience, and be part of a supportive community.
                                        </FAQItem>
                                        <FAQItem question="Be Part of a Community">
                                            Join a network of like-minded individuals who support each other&apos;s growth and well-being.
                                        </FAQItem>
                                    </div>
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
                                    <li key={i} className="hover:px-4 hover:text-white hover:bg-blue-500 p-2 rounded duration-500 transition-all cursor-pointer flex justify-between">
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
                                <Image width={300} height={300}
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
        </>
    );
}
