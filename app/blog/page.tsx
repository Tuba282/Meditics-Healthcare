"use client"
import 'swiper/css';
import 'swiper/css/autoplay';
import { IoMailOpen } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import Image from 'next/image';
import Banner from '../banner';
import Link from 'next/link';
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';
import { TfiEmail } from 'react-icons/tfi';



const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

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

  // pagination
  // const postsPerPage = currentPage === 1 ? 3 : 2;
  const totalPages = Math.ceil((blogPosts.length - 3) / 2) + 1;

  const getPaginatedPosts = () => {
    if (currentPage === 1) return blogPosts.slice(0, 3);
    const start = 3 + (currentPage - 2) * 2;
    return blogPosts.slice(start, start + 2);
  };

  const paginatedPosts = getPaginatedPosts();
  return (
    <div>
      <Banner page={'blog'} />

      <div className="max-w-6xl flex flex-wrap justify-center items-center gap-8 mb-15 mt-16 bg-white mx-auto p-3">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Blog Posts*/}
          <div className="lg:col-span-2 space-y-8 " >
            {paginatedPosts.map((post, i) => (
              <div key={i} className="rounded-lg shadow-sm bg-gray-100 overflow-hidden">
                <Image width={300} height={300} src={post.img} alt={post.title} className="w-full! h-full! object-cover" />
                <div className="lg:p-6 p-2 space-y-2">
                  {/* Meta Info */}
                  <div className="text-sm text-gray-500 hidden sm:flex items-center mb-5 gap-4">
                    <span className="flex justify-center items-center gap-1 text-white p-1 px-4 bg-[#0D6DFD] rounded-full">
                      {/* Author Icon */}
                      <IoMailOpen color="#ffff" className="w-[16px] h-[16px]" />
                      By {post.author}
                    </span>
                    <span className="flex justify-center items-center gap-1">
                      <FaRegClock color="#B6B7B9" className="w-[16px] h-[16px]" />
                      {post.readTime}
                    </span>
                    <span className="flex justify-center gap-3 items-center  ">
                      <TfiEmail color="#B6B7B9" className="w-[16px] h-[16px]" />
                      {post.comments} Comments
                    </span>
                  </div>

                  {/* Title + Excerpt */}
                  <h2 className="lg:text-3xl text-lg sm:text-2xl font-bold text-[#041C33] transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2 mb-4" style={{ fontSize: "15px" }}>
                    {post.text}
                  </p>

                  {/* Read More Button */}

                  <button
                    className="group flex items-center gap-3 text-sm text-[#0D6DFD] border border-[#0D6DFD] hover:bg-[#0D6DFD] hover:text-[white] px-5 py-3 rounded font-semibold transition-colors duration-300"
                  >
                    <Link href={`/detailBlog/${i}`} className="flex  lg:w-25 md:w-50 w-full  btn justify-center items-center gap-2  ">
                      <small>READ MORE</small>
                      <TiArrowForward className="text-[#0D6DFD] text-xl group-hover:text-white" />
                    </Link>
                  </button>

                </div>
              </div>
            ))}

            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="p-3 border border-gray-300 bg-white rounded-full transition"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                <TiArrowBack className="rover:text-[#0D6DFD] text-gray-500 bg-white group-hover:text-[white]" />

              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button className={`px-4 py-2 rounded  ${currentPage === i + 1
                  ? "bg-[#0D6DFD] text-white  border border-gray-300 rounded-full"
                  : " border border-gray-300 bg-white rounded-full text-gray-500 hover:bg-[#0D6DFD] hover:text-white"
                  } transition`}
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button className="p-3 border border-gray-300 bg-white rounded-full transition"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                <TiArrowForward className="hover:text-[#0D6DFD] text-gray-500 bg-white group-hover:text-[white]" />
              </button>
            </div>
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
    </div>
  );
};

export default Blog