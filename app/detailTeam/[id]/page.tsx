"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { teamMembers } from "@/app/team/page";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { BsFillInboxesFill } from "react-icons/bs";
import { NumberTicker } from "@/components/magicui/number-ticker";



export default function TeamDetailPage() {
    const params = useParams();
    const id = Number(params?.id || 0);
    const member = teamMembers[id];
    return (
        <>
            <div className="min-h-screen bg-white flex flex-col items-center py-10 px-2 lg:pt-30">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-5 mb-10">
                    <div className="w-full p-5 lg:p-0 lg:w-[40%] flex justify-center items-center">
                        <div className="rounded-2xl bg-[#e6efc2] flex items-center justify-center" style={{ minWidth: 320, minHeight: 340 }}>
                            <Image
                                src={`https://meditics.temptics.com/assets/img/banner-img.png`}
                                alt={member.name}
                                width={400}
                                height={400}
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="w-full p-5 lg:p-0 lg:w-[60%] flex flex-col justify-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-1">{member.name}</h1>
                        <div className="text-blue-600 font-medium mb-5 text-base">{member.specialty}</div>
                        <p className="text-gray-600 mb-4 text-sm">{member.about}</p>
                        <div className="bg-white border rounded-2xl w-full max-w-xl mb-6 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x overflow-hidden">
                            <div className="flex items-center gap-4 p-6">
                                <span className="w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-100 rounded-lg">
                                    <MdEmail className="w-[24px] h-[24px]" />
                                </span>
                                <div>
                                    <div className="font-bold text-gray-900">Email</div>
                                    <div className="text-gray-600 text-sm">{member.email}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6">
                                <span className="w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-100 rounded-lg">
                                    <FaPhone className="w-[24px] h-[24px]" />
                                </span>
                                <div>
                                    <div className="font-bold text-gray-900">Phone</div>
                                    <div className="text-gray-600 text-sm">{member.phone}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6">
                                <span className="w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-100 rounded-lg">
                                    <FaMapLocationDot className="w-[24px] h-[24px]" />
                                </span>
                                <div>
                                    <div className="font-bold text-gray-900">Address</div>
                                    <div className="text-gray-600 text-sm">{member.address}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6">
                                <span className="w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-100 rounded-lg">
                                    <BsFillInboxesFill className="w-[24px] h-[24px]" />
                                </span>
                                <div>
                                    <div className="font-bold text-blue-700">Experience</div>
                                    <div className="text-gray-600 text-sm">{member.experience}</div>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 w-fit">
                            Make Appointment <span><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M13.293 17.293a1 1 0 0 1 1.414 0l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 1 1 1.414-1.414l5.707 5.707a1 1 0 0 1 0 1.414l-5.707 5.707a1 1 0 0 1-1.414 0z" /></svg></span>
                        </button>
                    </div>
                </div>
                <hr className="my-8 w-full max-w-5xl border-gray-200" />
                <div className="max-w-5xl w-full">
                    <h2 className="text-2xl font-bold mb-2 px-6">Introducing the Doctor:</h2>
                    <p className="text-gray-700 mb-8 px-6">{member.intro}</p>
                    <div className="flex justify-between flex-col lg:flex-row">
                        <div className="w-full lg:w-[50%]  px-6">
                            <h2 className="text-2xl font-bold mb-2">Personal Experience</h2>
                            <p className="text-gray-700 mb-8">{member.experienceText}</p>
                        </div>
                        <div className="w-full lg:w-[50%] flex flex-wrap lg:justify-end gap-8 mb-8">
                            {member.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-end ps-1 md:p-0">
                                    <div className="w-15 h-15 md:w-24 md:h-24 rounded-full border-7 border-blue-500 flex items-center justify-center text-2xl md:text-4xl  mb-2">
                                        <NumberTicker
                                            value={stat.value}
                                            className="whitespace-pre-wrap text-lg md:text-4xl tracking-tighter font-mono text-black dark:text-white"
                                        />%
                                    </div>
                                    <div className="text-gray-700 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}