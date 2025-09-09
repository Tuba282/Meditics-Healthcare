
import Image from 'next/image'
import { TbArrowBigRightLines } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube ,FaFacebookSquare ,FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b2341] relative!  pt-10 pb-4 px-4 overflow-hidden text-white border-t border-[#1a3556]">
      <div className=" absolute top-0 left-0 w-full h-full object-cover bg-[url('https://meditics.temptics.com/assets/img/footer-bg.jpg')] opacity-3 bg-no-repeat bg-center"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo and description */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src={'https://meditics.temptics.com/assets/img/logo-white.svg'} alt="logo" className="me-20" width={200} height={100} />
          </div>
          <p className="text-gray-300 text-sm max-w-xs">
            It is a long established fact that a reader will be distracted the road readable content of a page when looking at layout.
          </p>
          <form className="hidden lg:flex mt-2">
            <input type="email" placeholder="Your Email Address" className="rounded-l-full px-6 py-3 text-black bg-white focus:outline-none w-60" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-full font-semibold flex items-center gap-2">SUBSCRIBE <TbArrowBigRightLines/> </button>
          </form>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-[#1a3556] hover:bg-blue-600 p-2 rounded"><FaFacebookSquare/></a>
            <a href="#" className="bg-[#1a3556] hover:bg-blue-600 p-2 rounded"><FaTwitter/></a>
            <a href="#" className="bg-[#1a3556] hover:bg-blue-600 p-2 rounded"><AiOutlineInstagram className='text-lg'/></a>
            <a href="#" className="bg-[#1a3556] hover:bg-blue-600 p-2 rounded"><FaYoutube className='text-lg'/></a>
          </div>
        </div>
        {/* Center: Quick Links & Company */}
        <div className="md:w-2/3 flex flex-col md:flex-row gap-10 justify-between">
          <div>
            <h3 className="font-semibold hover:cursor-pointer text-xl transition duration-200 mb-2 hover:text-blue-600 inline-block">Quick Links</h3>
            <ul className="space-y-1 mt-2 text-gray-200 text-xs">
              <li>General Health Check-Ups</li>
              <li>Stress & Lifestyle Counseling</li>
              <li>Vaccinations & Immunizations</li>
              <li>Referral to Specialists</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold hover:cursor-pointer text-xl transition duration-200 mb-2 hover:text-blue-600 inline-block">Company</h3>
            <ul className="space-y-1 mt-2 text-gray-200">
              <li><a href="/home" className="hover:text-blue-400 text-xs">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 text-xs">About Us</a></li>
              <li><a href="/team" className="hover:text-blue-400 text-xs">Team</a></li>
              <li><a href="/blog" className="hover:text-blue-400 text-xs">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold hover:cursor-pointer text-xl transition duration-200 mb-2 hover:text-blue-600 inline-block">Contact</h3>
            <ul className="space-y-1 mt-2 text-gray-200">
              <li className='text-xs '>102/ B Street, New Elephant Road,<br/>Sandigo, USA</li>
              <li className="text-xs mt-2">Email Us<br/><a href="mailto:info@exmple.com" className="hover:text-blue-400">info@exmple.com</a></li>
              <li className="text-xs mt-2">Call Now<br/><a href="tel:+20866660112" className="hover:text-blue-400">+208-6666-0112</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col items-center gap-4">
        <div className="flex gap-4 flex-wrap justify-center">
          <Image src={"https://meditics.temptics.com/assets/img/payment-method-1.png"} alt="GPay" width={50} height={32} className="h-8 w-auto" />
          <Image src="https://meditics.temptics.com/assets/img/payment-method-2.png" alt="Apple Pay" width={50} height={32} className="h-8 w-auto" />
          <Image src="https://meditics.temptics.com/assets/img/payment-method-3.png" alt="PayPal" width={50} height={32} className="h-8 w-auto" />
          <Image src="https://meditics.temptics.com/assets/img/payment-method-4.png" alt="Visa" width={50} height={32} className="h-8 w-auto" />
          <Image src="https://meditics.temptics.com/assets/img/payment-method-5.png" alt="Mastercard" width={50} height={32} className="h-8 w-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl text-gray-400 text-sm mt-2 px-2">
          <div>
            © <span className="text-blue-400">Meditics</span> 2025.Made by Tuba Jan | All Rights Reserved.
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-400">Terms of use</a>
            <a href="#" className="hover:text-blue-400">Privacy</a>
            <a href="#" className="hover:text-blue-400">Environmental Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer