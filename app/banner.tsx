
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface BannerProps {
  page: React.ReactNode;
}

const Banner = (page: BannerProps) => {
  return (
    <div className='relative w-full h-48 md:min-h-80 bg-gradient-to-r from-blue-950 from-10% via-[#041C33] via-30% to-[#041C33] to-90% flex flex-col justify-center items-center '>
      {/* bg-[#041C33]  */}
      <h1 className='font-bold text-white text-4xl md:text-6xl font-sans italic'>{page.page}</h1>
      <span className=" text-white text-md md:text-2xl font-sans italic flex gap-3 justify-center items-center my-5 capitalize"><Link href={'home'}>Home</Link> <FaChevronRight className="text-sm" /><Link href={`${page.page}`}>{page.page}</Link> </span>

      <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={50} height={50} style={{ animation: 'shortPlus 2s infinite forwards linear' }} className="w-[80px]! h-[80px]! z-1 absolute top-25 left-130 blur-[1px] grayscale-50 transition duration-700" alt="Doctor" />
      <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={50} height={50} style={{ animation: 'upDown 5s infinite forwards linear' }} className="w-[40px]! h-[40px]! z-1 absolute top-20 left-30 blur-[1px] grayscale-50 transition duration-700" alt="Doctor" />
      <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={50} height={50} style={{ animation: 'shortPlus 3s infinite forwards linear' }} className="w-[40px]! h-[40px]! z-1 absolute bottom-10 left-6 grayscale-70 transition duration-700" alt="Doctor" />
      <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} style={{ animation: 'rightLeftupDown 3s infinite forwards linear' }} className="w-[40px]! h-[40px]! z-1 absolute bottom-10 right-6 grayscale-70 transition duration-700" viewBox="0 0 512 512">
        <path fill="#324B78" d="M210.3 65.5c28.8 7.3 51.4 29.9 58.7 58.7c.7 2.8 4.3 2.8 5 0c7.3-28.8 29.9-51.4 58.7-58.7c2.8-.7 2.8-4.3 0-5c-28.8-7.3-51.4-29.9-58.7-58.7c-.7-2.8-4.3-2.8-5 0c-7.3 28.8-29.9 51.4-58.7 58.7c-2.8.7-2.8 4.3 0 5" strokeWidth="1" stroke="#324B78" />
        <path fill="#324B78" d="M6.7 188.3c50.8 12.9 90.8 52.9 103.7 103.7c1.2 4.9 7.5 4.9 8.8 0c12.9-50.8 52.9-90.8 103.7-103.7c4.9-1.2 4.9-7.5 0-8.8C172 166.7 132 126.7 119.2 75.9c-1.2-4.9-7.5-4.9-8.8 0c-12.9 50.8-52.9 90.8-103.7 103.7c-4.9 1.2-4.9 7.5 0 8.7" strokeWidth="1" stroke="#324B78" />
        <path fill="#324B78" d="M180 350.7c76 19.3 135.9 79.1 155.1 155.1c1.9 7.3 11.3 7.3 13.1 0c19.3-76 79.1-135.9 155.1-155.1c7.3-1.9 7.3-11.3 0-13.1c-76-19.3-135.9-79.1-155.1-155.1c-1.9-7.3-11.3-7.3-13.1 0c-19.3 76-79.1 135.9-155.1 155.1c-7.3 1.8-7.3 11.2 0 13.1" strokeWidth="1" stroke="#324B78" />
      </svg>
    </div>
  )
}

export default Banner