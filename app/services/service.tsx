
import { RiMicroscopeFill } from "react-icons/ri";
import React from "react";
import { FaVialVirus } from "react-icons/fa6";
import { LuDna } from "react-icons/lu";
import { TiArrowForward } from "react-icons/ti";
import Image from "next/image";

import { Marquee } from "./marquee";

const services = [
    {
        title: "Clinical Pathology",
        description: "Clinical pathology involves the analysis of bodily fluids and tissues.",
        image: "/service-1.jpg",
        icon: <RiMicroscopeFill className="text-blue-700" />
    },
    {
        title: "Histopathology",
        description: "Histopathology examines tissue samples under a microscope to detect abnormalities.",
        image: "/service-2.jpg",
        icon: <FaVialVirus className="text-blue-700" />
    },
    {
        title: "Biochemistry",
        description: "Biochemistry tests measure chemical in blood and body fluids.",
        image: "/service-3.jpg",
        icon: <LuDna className="text-blue-700" />
    },
    {
        title: "Hematology (Blood Tests)",
        description: "Hematology tests analyze blood components to detect anemia, infections.",
        image: "/service-4.jpg",
        icon: <RiMicroscopeFill className="text-blue-700" />
    },
    {
        title: "Urine & Stool Analysis",
        description: "Urine and stool analysis help detect infections, digestive issues, kidney problems.",
        image: "/service-5.jpg",
        icon: <FaVialVirus className="text-blue-700" />
    },
    {
        title: "Hemoglobin (Hb)",
        description: "Hemoglobin (Hb) is a vital protein in red blood cells that carries oxygen within the body.",
        image: "/service-6.jpg",
        icon: <LuDna className="text-blue-700" />
    },
];

const Service: React.FC = () => {
    return (
        <section className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
                    Our Lab Services
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-3">
                    {services.map((service, idx) => (
                        <div key={idx} className="group w-[350px] h-[400px] relative flex flex-col items-center rounded-xl bg-gray-100 shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                            {/* Image */}
                            <div className="h-58 w-full overflow-hidden">
                                <Image
                                    src={service.image} width={100} height={200}
                                    alt="Hematology"
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Icon + Arrow Centered Below Image */}
                            <div className="w-full p-3 flex justify-between items-center absolute top-[200px] left-0 transition duration-300">
                                <span className="w-10 h-10 flex  justify-center items-center  bg-white rounded-full">
                                    {service.icon}
                                </span>

                                <div className="w-10 h-10 flex group-hover:hidden transition-transform duration-300 justify-center items-center  bg-blue-600 rounded">
                                    <TiArrowForward className="text-white" />
                                </div>
                                <button className="hidden group-hover:flex justify-center items-center gap-2 h-10 w-0 group-hover:w-40  bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded transition-all duration-300">
                                    Read More
                                    <TiArrowForward className="text-lg" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="px-5 pt-16 pb-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-slate-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Marquee/>
        </section>
    );
};

export default Service;
