import Banner from "../banner";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="bg-gray-50 overflow-hidden">
      <Banner page={'contact'} />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl flex justify-center items-center flex-wrap gap-6 overflow-hidden my-5 md:my-10">
          {/* Address */}
          <div className="w-full max-w-[250px] flex flex-col items-center justify-center text-center bg-gray-100 rounded-xl p-6 shadow-sm">
            <span className="w-15 h-15 bg-blue-600 flex justify-center items-center rounded-full">
              <MdEmail className="text-white text-2xl"  />
            </span>
            <h4 className="text-xs font-semibold text-blue-600 mb-1">Address</h4>
            <p className="text-xs text-slate-700">
              House #5, Street Number #98, Brasilia-70000-000, Brazil
            </p>
          </div>

          {/* Email */}
          <div className="w-full max-w-[250px] flex flex-col items-center justify-center text-center bg-gray-100 rounded-xl p-6 shadow-sm">
            <span className="w-15 h-15 bg-blue-600 flex justify-center items-center rounded-full">
              <FaLocationDot className="text-white text-xl"  />
            </span>
            <h4 className="text-xs font-semibold text-blue-600 mb-1">Email</h4>
            <p className="text-xs text-slate-700">info@example.com</p>
            <p className="text-xs text-slate-700">infoExample@example.com</p>
          </div>

          {/* Phone */}
          <div className="w-full max-w-[250px] flex flex-col items-center justify-center text-center bg-gray-100 rounded-xl p-6 shadow-sm">
            <span className="w-15 h-15 bg-blue-600 flex justify-center items-center rounded-full">
              <FaPhone className="text-white text-xl"  />
            </span>
            <h4 className="text-xs font-semibold text-blue-600 mb-1">Phone</h4>
            <p className="text-xs text-slate-700">+208-666-01112</p>
            <p className="text-xs text-slate-700">+38095-1381877</p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl flex justify-center items-center flex-col lg:flex-row overflow-hidden">

          {/* Left: Map */}
          <div className="w-full md:w-[50%] h-full   shadow-sm shadow-black">

            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902264812527!2d90.41251807510758!3d23.75088537869381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894f6f1f3a3%3A0x2f7c8d1c9f8e6c1c!2sSouth%20Baridhara%20Residential%20Area!5e0!3m2!1sen!2sbd!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="inset-0 w-full lg:h-[540px] rounded-l-xl"
            ></iframe>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-[50%] h-full  shadow-sm shadow-black mx-auto p-8 bg-[var(--darkBlue)] rounded-r-xl">
            {/* Form matching the provided image */}
            <form className="w-full max-w-xl mx-auto bg-transparent p-0 grid grid-cols-1 gap-5">
              <h2 className="text-white font-bold text-4xl mb-4">Lets talk...</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-white font-semibold mb-1">Your Name <span className="text-red-500">*</span></label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded px-4 py-3 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white font-semibold mb-1">Your Email <span className="text-red-500">*</span></label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded px-4 py-3 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-white font-semibold mb-1">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded px-4 py-3 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-white font-semibold mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="Messages"
                  rows={5}
                  className="w-full rounded px-4 py-3 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              <Button type="submit" className="w-full flex gap-2 justify-center items-center py-4 rounded bg-[var(--lightBlue)] hover:bg-blue-700 text-white text-lg font-semibold mt-2">
                Submit Now <HiOutlineArrowTrendingUp className="text-xl font-bold" />
              </Button>
            </form>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contact;
