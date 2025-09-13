"use client"
import { motion } from "framer-motion";
import { BiSolidHeart } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Footer from "../footer";
import Banner from "../banner";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';


const About = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);



  const testimonials = [
    {
      name: "Kathryn Murphy",
      role: "Medical Assistant"
    },
    {
      name: "John Carter",
      role: "Cardiologist"
    },
    {
      name: "Ayesha Khan",
      role: "Dermatologist"
    }
  ];

  return (
    <div>
      <Banner page="about" />

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto lg:py-20 pb-10 flex flex-wrap justify-center items-center gap-8 p-1">
        <section className="bg-[white] lg:py-15 text-black px-4 md:px-8 lg:px-16 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 ">
            <Image
              src="https://meditics.temptics.com/assets/img/about-2-vector.svg"
              alt="Background" width={100} height={100}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mx-auto  flex flex-col lg:flex-row items-center justify-between gap-20">

            {/* <!-- Left: Overlapping Mobile Screens --> */}
            <div className="lg:w-1/2 relative flex  md:px-5 px-1 justify-center items-center mt-10 lg:mt-0" >
              <div className='lg:absolute lg:-bottom-[290px]'>

                {/* <!-- Back Image --> */}
                <div className="-left-[248px] lg:block md:block hidden text-center transform-3d rotate90deg md:bottom-[248px] bg-[#0D6DFD] lg:p-4 md:p-4 text-white z-40  absolute " >
                  12+ YEARS EXPERIENCE 
                  <span className="text-[#0D6DFD]">cs45a</span>
                </div>

                {/* <!-- Back Image --> */}
                <div className="w-[190px] h-[190px] md:-right-[40px] lg:block md:block hidden right-[10px]  lg:top-[100px] top-[300px] rounded z-10  absolute " >
                  <Image width={100} height={100} src="https://meditics.temptics.com/assets/img/about-2-img-2.jpg" alt="Consult Top Doctors" className="w-full h-full rounded-xl object-cover" />
                </div>


                {/* <!-- Front Image --> */}
                <div className=" w-full lg:h-[550px] md:h-[550px] rounded-circle bg-custom-blue border-circle2 relative" >
                  <Image width={100} height={100} src="https://meditics.temptics.com/assets/img/about-2-img-1.jpg" alt="About" className="w-full h-full object-cover rounded-xl custom-radius sm:custom-radius-sm  border-r-5 border-[#DBE9A1]" />
                </div>


              </div>
            </div>

            {/* <!-- Right Content --> */}
            <div className="lg:w-1/2 lg:ps-5 lg:text-left md:text-center text-center space-y-2" >

              <span className="text-[#0D6DFD]  flex gap-2 lg:justify-start justify-center  font-medium  uppercase tracking-wide" >
                <BiSolidHeart color='#0D6DFD' /> ABOUT US</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug" >Committed to Your Care <br /> Every Step of the Way</h2>

              <p className="text-gray-500 text-sm leading-relaxed" >
                With a team of world-class doctors, experienced nurses, and dedicated healthcare professionals, we are committed to delivering compassionate, high-quality medical care to every patient.
              </p>

              <ul className="text-gray-600 space-y-2 text-sm  list-disc list-inside"  >

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <FaAngleRight />
                    </span>&nbsp;&nbsp;Highly Qualified Specialists </li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <FaAngleRight />
                    </span>&nbsp;&nbsp;Advanced Medical Equipmeent</li>
                </div>

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <FaAngleRight />
                    </span>&nbsp;&nbsp;Safe, Comfortable Environment</li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <FaAngleRight />
                    </span>&nbsp;&nbsp;24/7 Emergency Services Host</li>
                </div>

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <FaAngleRight />
                    </span>&nbsp;&nbsp;Patient-Centered Approach</li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <FaAngleRight />
                    </span>&nbsp;&nbsp;Affordable, Transparent Pricing</li>
                </div>

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center items-center lg:items-start  md:p-1'>
                    <span className="p-3">
                      <Image src="https://meditics.temptics.com/assets/img/about-2-author.jpg" className='rounded-full' alt="picdoc" width={60} height={60} />
                    </span>
                    <span>
                      <strong> CEO, Founder Of <br /> CarePoint</strong>
                    </span>
                  </li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <Image src="https://meditics.temptics.com/assets/img/signature.png" alt="signature" width={200} height={100} />
                  </li>
                </div>
              </ul>

              <div className='flex lg:justify-start justify-center mt-4 gap-4 mx-auto'>
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="group hidden lg:flex items-center gap-2 text-sm bg-[#DBE9A1] hover:bg-[#041C33] hover:text-[#DBE9A1] px-5 py-3 rounded  transition-colors duration-300"
                >
                  More About
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate fill-current stroke-current text-[#041C33] group-hover:text-[#DBE9A1] transition-colors duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </section >
      </div>


      {/* Where Compassion Meets Excellence */}
      <section className="bg-[linear-gradient(90deg,_rgba(10,30,59,1)_34%,_rgba(46,70,132,1)_63%)] text-white py-16 px-4 relative overflow-visible">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image Section */}
          <div className="w-full  flex justify-center items-center ">

            <div className="relative">
              <div className="flex">
                <Image src="https://meditics.temptics.com/assets/img/why-choose-img-1.jpg" alt="Nurse  with patient" width={100} height={100}
                  className="rounded-xl lg:w-[430px] z-5 w-full object-cover shadow-md  lg:border-none border-8 border-[#DBE9A1]" />

                <span className="lg:absolute lg:block lg:-right-[20px] lg:top-[50px] lg:w-[300px]  lg:h-[490px] border-8 rounded-xl hidden border-[#DBE9A1]"></span>



                <span className="lg:hidden md:hidden absolute sm:left-[250px] sm:top-[300px] top-[150px] left-[100px] z-5 p-5 bg-[#DBE9A1] rounded-full transition duration-300 group-hover:bg-[#1D3777]">
                  <a href="https://www.youtube.com/watch?v=bO6NNfX_1ns"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 transition duration-300 text-black group-hover:text-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.2"
                        d="M1 15.65L15.662 8L1 .35z"
                      />
                    </svg>
                  </a>
                </span>
              </div>

              <div>
                <Image src="https://meditics.temptics.com/assets/img/why-choose-img-2.jpg" alt="Doctor with patient" width={100} height={100}
                  className="rounded-xl w-[230px] lg:z-5  md:z-5 h-[220px] md:absolute lg:absolute lg:-right-[100px] md:-right-[100px] lg:top-[350px] md:top-[200px] hidden lg:block md:block  object-cover shadow-md" />

                <div className="relative group z-10 lg:mt-0 md:mt-0 mt-15 lg:block md:block hidden">
                  <span className="lg:absolute md:absolute lg:-right-[15px]  lg:bottom-[40px] md:bottom-[300px]  md:-right-[15px] lg:p-4 md:p-4  bg-[#DBE9A1] rounded-full transition duration-300 group-hover:bg-[#1D3777]">
                    <a href="https://www.youtube.com/watch?v=bO6NNfX_1ns"
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 transition duration-300 text-black group-hover:text-white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.2"
                          d="M1 15.65L15.662 8L1 .35z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Content Section */}
          <div className="w-full  ">
            <div className="lg:text-left text-center mx-auto relative">
              <button className="text-[#0D6DFD] lg:mx-0  mx-auto flex  items-center gap-2 px-4 py-1 rounded-full font-semibold uppercase transition-colors duration-300">
                <BiSolidHeart color="#0D6DFD" /> Why Choose Us
              </button>
              <h2 className="text-white font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4">
                Where Compassion Meets Excellence
              </h2>
              <p className="mb-6 lg:text-sm md:text-[14px]">
                That is why we are committed to delivering world-class medical services with <br />
                compassion, innovation, and integrity — putting your health and comfort first.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="p-4 flex justify-center items-center  gap-5">
                <div>
                  <span className="p-3 font-bold border border-white bg-white text-[#0D6DFD] rounded-full">
                    <span>01</span>
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xl">Personalized Patient Care</h4>
                  <p className="text-sm text-[#ccc]">
                    Our team includes highly trained doctors, nurses, and specialists, each dedicated to providing the best possible care.
                  </p>
                </div>
              </div>
              <div className="p-4 flex justify-center items-center  gap-5">
                <div>
                  <span className="p-3 font-bold border border-white bg-white text-[#0D6DFD] rounded-full">
                    <span>02</span>
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xl">World-Class Medical Experts</h4>
                  <p className="text-sm text-[#ccc]">
                    Our team includes highly trained doctors, nurses, and specialists, each dedicated to providing the best possible care.
                  </p>
                </div>
              </div>
              <div className="p-4 flex justify-center items-center  gap-5">
                <div>
                  <span className="p-3 font-bold border border-white bg-white text-[#0D6DFD] rounded-full">
                    <span>03</span>
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xl">Advanced Facilities</h4>
                  <p className="text-sm text-[#ccc]">
                    We offer state-of-the-art equipment and technology to ensure accurate diagnosis and effective treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex mt-4 items-center gap-3 lg:mx-0 mx-auto text-sm text-white border border-[#0D6DFD] hover:bg-[#0D6DFD] hover:text-[white] px-5 py-3 rounded font-semibold transition-colors duration-300"
            >
              <div className="flex  w-full  btn justify-center items-center gap-2  ">
                <small>APPOINTMENT NOW</small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate fill-current stroke-current text-[white]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </div>
            </motion.button>
          </div>
        </div>
      </section >


      {/*  Happy Patients says */}
      < section className=" relative bg-[#F8FAFC] py-16  overflow-hidden" >

        {/* Background SVGs */}
        < div className="relative" >
          <Image
            src="https://meditics.temptics.com/assets/img/feedback-2-vector-1.svg"
            alt="Background Illustration"
            className="absolute "
            width={100} height={100}
          />
        </div >

        {/* right vector img */}
        < div className="flex justify-center items-center" >
          <Image
            src="https://meditics.temptics.com/assets/img/feedback-2-vector-2.svg"
            alt="Laptop Illustration" width={100} height={100}
            className="absolute right-[0] top-[150px] w-[200px] h-[200px]"
          />
        </div >


        <div className="max-w-7xl mx-auto flex lg:justify-between lg:gap-4 gap-5 lg:flex-row flex-col justify-center items-center lg:px-5">
          <div className="w-full ">
            <div className="lg:text-left text-center  relative">
              <button className="text-[#0D6DFD] lg:mx-0  mx-auto border border-[#0D6DFD] flex items-center gap-2 px-4 py-1 rounded-full font-semibold uppercase transition-colors duration-300">
                <BiSolidHeart color="#0D6DFD" /> patient SAYS
              </button>
              <h2 className="text-black font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4">
                Happy Patients says
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa <br /> mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, <br /> mattis ligula consec.</p>
            </div>

            {/* Custom Navigation Buttons */}
            <div className="flex mt-5 lg:justify-start items-center justify-center gap-4">
              <motion.button
                ref={prevRef}
                onClick={() => swiperRef.current?.slidePrev()}
                className="group flex items-center gap-3 text-sm border-black border hover:bg-[#DBE9A1] text-white hover:text-[#041C33] p-3 rounded-full font-semibold transition-colors duration-300"
              >
                <svg className="rotate2 fill-current stroke-current text-black" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </motion.button>

              <motion.button
                ref={nextRef}
                onClick={() => swiperRef.current?.slideNext()}
                className="group flex items-center gap-3 text-sm border-black border hover:bg-[#DBE9A1] text-white hover:text-[#041C33] p-3 rounded-full font-semibold transition-colors duration-300"
              >
                <svg className="rotate fill-current stroke-current text-black" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </motion.button>
            </div>

          </div>


          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            navigation={swiperReady ? {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            } : false}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            className="w-full"> 

            {testimonials.map((t, i) => (

              <SwiperSlide key={i}>
                <div className="relative w-full lg:w-[550px] mx-auto px-4 py-5">
                  {/* Ghost Layers */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="absolute w-full h-full scale-[0.95] blur-sm opacity-30 animate-pulse-layer bg-white rounded-xl shadow-md"></div>
                    <div className="absolute w-full h-full scale-[0.90] blur-sm opacity-20 animate-pulse-layer bg-white rounded-xl shadow-md"></div>
                    <div className="absolute w-full h-full scale-[0.85] blur-sm opacity-10 animate-pulse-layer bg-white rounded-xl shadow-md"></div>
                  </div>

                  {/* Active Card */}
                  <div className="relative z-10 bg-white rounded-xl shadow-md p-6 md:p-10 h-full transition-all duration-500 ease-in-out">
                    <Image src="/quotecomma.jpeg" alt="pic" className="w-15 h-12 object-cover" width={100} height={100} />
                    <p className="text-gray-600 mt-4 text-sm font-semibold headinglato md:text-base leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae culpa pariatur cumque aliquid voluptatum, recusandae quos dolore odit. Rerum Quidem, enim minus.</p>
                    <div className="flex lg:justify-start items-center border-t border-[#dddddd76] pt-4 justify-center gap-4">
                      <Image src="/44.jpg" alt="pic" className="w-12 h-12 border-2 border-[#0D6DFD] rounded-full object-cover" width={100} height={100} />
                      <div className="text-left">
                        <h4 className="text-sm font-semibold text-[#041C33]">{t.name}</h4>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </section >


      {/* YOUR HEALTH, YOUR CONVENIENCE */}
      < section className="bg-[white] text-black px-4 md:px-8 lg:px-16 lg:mt-40 lg:mb-35 lg:py-13 md:py-10 " >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* <!-- Left Content --> */}
          <div className="lg:w-1/2  lg:text-left md:text-center text-center space-y-2" >

            <span className="text-[#0D6DFD] mt-5  lg:mt-0 pt-5  lg:pt-0 flex gap-2 lg:justify-start justify-center text-sm font-medium  uppercase tracking-wide"  >
              <BiSolidHeart color='#0D6DFD' /> YOUR HEALTH, YOUR CONVENIENCE</span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug" data-aos="fade-up" data-aos-duration="1050">Consult Your Doctor Online <br />— Anytime, Anywhere</h2>

            <p className="text-gray-500 text-sm leading-relaxed"  >
              Say goodbye to long queues and unnecessary travel. With our secure video consultation service, you will be able to get experienced doctors from the comfort of your home.
            </p>

            <ul className="text-gray-600 space-y-2 text-sm  list-disc list-inside"  >

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <FaAngleRight />
                </span>&nbsp;Speak with certified specialists in real time</li>

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <FaAngleRight />
                </span>&nbsp;Easy appointment booking via mobile or web</li>

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <FaAngleRight />
                </span>&nbsp;Private, secure, and confidential video calls</li>

              <li className='flex   lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <FaAngleRight />
                </span>&nbsp;Available 7 days a week, including evenings</li>
            </ul>

            <div className='flex lg:flex-row flex-col lg:justify-start justify-center lg:gap-4  mx-auto'>
              <motion.button data-aos="fade-up" data-aos-duration="1900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="group flex items-center  lg:justify-start justify-center mt-6 gap-3 text-sm bg-[#0D6DFD] hover:bg-[#DBE9A1] text-white  text-[12px]  sm:text-[14px] md:text-[16px]hover:text-[#041C33] px-5 py-3 rounded font-semibold transition-colors duration-300"
              >
                Book A Video Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate fill-current stroke-current text-white group-hover:text-[#041C33]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </motion.button>

              <motion.button data-aos="fade-up" data-aos-duration="1900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="group flex items-center lg:mt-6 lg:justify-start justify-center  mt-3 gap-3 text-sm border border-[black] hover:bg-[black] text-black text-[12px]  sm:text-[14px] md:text-[16px] hover:text-[white] px-5 py-3 rounded font-semibold transition-colors duration-300"
              >
                Book A Video Call

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate fill-current stroke-current text-black group-hover:text-[white]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* <!-- Right Content: Overlapping Mobile Screens --> */}
          <div className="lg:w-1/2 relative flex  md:px-5 px-1 justify-center items-center mt-10 lg:mt-0" >

            <div className='lg:absolute lg:mb-0 md:mb-0 mb-15 lg:-bottom-[290px]  '>

              {/* <!-- Back Image --> */}
              <div className="lg:w-[190px] lg:h-[190px] h-[100px] lg:left-[0px] lg:top-[0px]  z-10  absolute "  >
                <Image src="https://meditics.temptics.com/assets/img/inner-video-call-img-2.png" width={100} height={100} alt="Consult Top Doctors" className="w-full h-full object-cover" />
              </div>

              {/* <!-- Back Image --> */}
              <div className="lg:w-[100px] w-[50px] p-0 lg:h-[100px] h-[50px] bg-[#DBE9A1] flex justify-center items-center rounded-full lg:-right-[50px] right-0 lg:top-[0px]  z-10  absolute " >
                <Image src="/video.png" alt="video" className="lg:w-[60px] w-[30px] object-cover" width={100} height={100} />
              </div>


              {/* <!-- Front Image --> */}
              <div className="w-full lg:h-[550px] border-circle relative"  >
                <Image src="https://meditics.temptics.com/assets/img/inner-video-call.png" width={100} height={100} alt="Dr. Tiffany Rizka" className="w-full h-full object-cover" />
              </div>


            </div>
          </div>

        </div>
      </section >


      <Footer />
    </div >
  );
};

export default About;


