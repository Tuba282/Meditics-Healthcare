
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { BsHeartFill } from "react-icons/bs";
import SwiperSlider from './swiper';
import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import AOS from 'aos';

const Hero = () => {
  return (
    <div className="w-full pt-20 lg:pt-25 overflow-hidden bg-[var(--darkBlue)]">
      <Image src="https://meditics.temptics.com/assets/img/banner-vector-1.svg" width={200} height={200} className="absolute top-0 left-0 z-1" alt="Doctor" />
      <Image src="https://meditics.temptics.com/assets/img/banner-vector-1.svg" width={200} height={200} className="absolute top-0 left-0 z-1" alt="Doctor" />
      <div className="relative flex flex-col gap-6 xl:flex-row items-center max-w-8xl  px-5 lg:px-10">
        <div className="w-full xl:w-[40%] sm:p-10">
          <span className='w-25 py-1 px-3 text-sm flex justify-center items-center gap-3 text-[var(--totaGreen)]  rounded-full border-1 border-[var(--totaGreen)] '><BsHeartFill /> HI I AM</span>
          <h2 className="text-4xl text-white font-extrabold font-[sora] text-center md:text-left  tracking-wider leading-relaxed ">
            Meet Dr. Tushar Raja — Your Trusted Healthcare Partner
          </h2>
          <h3
            className="my-6 md:my-10 text-md text-center md:text-left text-gray-700 font-light">
            Dr. Tushar is a highly experienced and compassionate [Specialization, e.g., General Physician / Cardiologist / Dermatologist] dedicated.
          </h3>
          <div className="flex gap-3 items-center my-3">
            <Button variant="outline" className="flex gap-2 border-none py-5! px-4 rounded-sm hover:bg-[var(--totaGreen)] bg-[var(--lightBlue)] hover:text-white">BOOK APPOINTMENT <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></Button>
            <Button variant="outline" className="hidden sm:flex gap-2 border-1 border-white text-white py-5! px-4 rounded-sm hover:bg-white bg-transparent hover:text-black">VIEW SCHEDULE <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></Button>

          </div>
        </div>
        <div className="w-full xl:w-[60%] flex items-center relative" >
          <Image src="https://meditics.temptics.com/assets/img/banner-img.png" width={500} height={500} className="w-full z-2 md:w-[500px] object-contain" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-4.svg" width={100} height={100} className="absolute bottom-5 right-0" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-4.svg" width={100} height={100} className="absolute bottom-5 right-0" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-3.svg" width={500} height={500} className="w-full! z-1 absolute top-50 left-0" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-3.svg" width={500} height={500} className="w-full! z-1 absolute top-50 left-0" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={400} height={550} className="w-[460px]! h-[460px]! z-1 absolute translate-x-[10%] translate-y-[10%]" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={400} height={550} style={{ animation: 'shadowAnim 2s infinite forwards linear' }} className="w-[460px]! h-[460px]! z-1 absolute translate-x-[10%] translate-y-[10%]" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={400} height={550} style={{ animation: 'shadowAnim 1s infinite forwards linear' }} className="w-[460px]! h-[460px]! z-1 absolute translate-x-[10%] translate-y-[10%]" alt="Doctor" />
          <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={50} height={50} style={{ animation: 'shortPlus 3s infinite forwards linear' }} className="w-[50px]! h-[50px]! z-1 absolute top-17 left-0 transition duration-700" alt="Doctor" />

          <div className="hidden md:flex w-100 h-[180px] absolute top-0 right-0 p-2">
            <SwiperSlider />
          </div>
        </div>
        <div className="hidden md:flex flex-col transition duration-200  justify-between gap-4 items-center text-white w-10 h-[180px] bg-[var(--lightBlue)] rounded-l-3xl absolute bottom-60 right-0 py-5">
          <FaFacebookSquare className='text-lg hover:scale-100 ' />
          <FaTwitter className='text-lg hover:scale-100 ' />
          <RiInstagramFill className='text-lg hover:scale-100 ' />
          <FaYoutube className='text-lg hover:scale-100 ' />
        </div>

      </div>
    </div>
  )
}

export default Hero