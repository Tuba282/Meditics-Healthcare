import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image src='https://meditics.temptics.com/assets/img/blog-vector-2.svg' width={300} height={300} className="absolute bottom-0 right-0 " alt="Doctor" />
             
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Map */}
        <div className="w-full h-[400px]  overflow-hidden">

          <span className='w-40  py-1 my-3 px-3 text-sm hidden md:flex justify-center items-center gap-3 text-blue-700  rounded-full border-1 border-blue-700 font-semibold'><BsHeartFill /> Appointment</span>

          <h2 className="m-0 font-bold font-sans text-3xl my-1 md:text-4xl leading-tight text-slate-900">
            Apply for Appointment
          </h2>
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902264812527!2d90.41251807510758!3d23.75088537869381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894f6f1f3a3%3A0x2f7c8d1c9f8e6c1c!2sSouth%20Baridhara%20Residential%20Area!5e0!3m2!1sen!2sbd!4v1690000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="inset-0 w-full h-full  shadow-md rounded-xl"
          ></iframe>
        </div>

        {/* Right: Form */}
        <div className="max-w-5xl mx-auto p-8">


          {/* Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Row 1 */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded border-none outline-none px-4 py-4 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded border-none outline-none px-4 py-4 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            {/* Row 2 */}
            <input
              type="tel"
              placeholder="Your Number"
              className="w-full rounded border-none outline-none px-4 py-4 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="relative">
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                className="w-full rounded border-none outline-none px-4 py-4 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Row 3 */}
            <select className="w-full rounded border-none outline-none px-4 py-4 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select Doctor</option>
              <option>Dr. Ahsan</option>
              <option>Dr. Fatima</option>
            </select>
            <select className="w-full rounded border-none outline-none px-4 py-4 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select Treatment</option>
              <option>General Checkup</option>
              <option>Pediatrics</option>
              <option>Cardiology</option>
            </select>

            {/* Checkbox + Button */}
            <div className="sm:col-span-2 flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="accent-blue-600" />
                I agree terms and conditions
              </label>

            </div>
              <Button variant="outline" className="flex gap-2 border-none py-5! px-4 rounded-sm hover:bg-[var(--darkBlue)] bg-[var(--lightBlue)] text-white">BOOK AN APPOINTMENT <HiOutlineArrowTrendingUp className='text-2xl font-bold' /></Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact