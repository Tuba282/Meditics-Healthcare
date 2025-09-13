
import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import Link from "next/link";

export const teamMembers = [
  {
    id: 1,
    title: "Chief Pathologist",
    name: "Dr. Sohel Islam",
    specialty: "Internal Medicine & Diabetology",
    email: "info@example.com",
    phone: "+208-6866-0112",
    address: "123 Main Street, NY",
    experience: "3-5 years",
    about: `Our doctors are more than just healthcare professionals — they're compassionate caregivers, committed to providing personalized, expert medical care. With years of experience and deep knowledge in their respective fields, our doctors ensure that patients receive the best possible treatment and support.`,
    intro: `One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for`,
    experienceText: `Bring win-win survival techniques to the table. victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.`,
    stats: [
      { label: "Surgery", value: 55 },
      { label: "Medicine", value: 73 },
      { label: "Healthcare", value: 90 },
    ],
    social: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Dr. Tanvir Alam",
    title: "Consultant Pathologist",
    specialty: "Internal Medicine & Diabetology",
    email: "info@example.com",
    phone: "+208-6866-0112",
    address: "123 Main Street, NY",
    experience: "3-5 years",
    about: `Our doctors are more than just healthcare professionals — they're compassionate caregivers, committed to providing personalized, expert medical care. With years of experience and deep knowledge in their respective fields, our doctors ensure that patients receive the best possible treatment and support.`,
    intro: `One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for`,
    experienceText: `Bring win-win survival techniques to the table. victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.`,
    stats: [
      { label: "Surgery", value: 55 },
      { label: "Medicine", value: 73 },
      { label: "Healthcare", value: 90 },
    ],
    social: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Dr. Nafisa Rahman",
    title: "Family Physician",
    specialty: "Internal Medicine & Diabetology",
    email: "info@example.com",
    phone: "+208-6866-0112",
    address: "123 Main Street, NY",
    experience: "3-5 years",
    about: `Our doctors are more than just healthcare professionals — they're compassionate caregivers, committed to providing personalized, expert medical care. With years of experience and deep knowledge in their respective fields, our doctors ensure that patients receive the best possible treatment and support.`,
    intro: `One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for`,
    experienceText: `Bring win-win survival techniques to the table. victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.`,
    stats: [
      { label: "Surgery", value: 55 },
      { label: "Medicine", value: 73 },
      { label: "Healthcare", value: 90 },
    ],
    social: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
    },
    highlight: true,
  },
  {
    id: 4,
    name: "Dr. Tania Akter",
    title: "Physician",
    specialty: "Internal Medicine & Diabetology",
    email: "info@example.com",
    phone: "+208-6866-0112",
    address: "123 Main Street, NY",
    experience: "3-5 years",
    about: `Our doctors are more than just healthcare professionals — they're compassionate caregivers, committed to providing personalized, expert medical care. With years of experience and deep knowledge in their respective fields, our doctors ensure that patients receive the best possible treatment and support.`,
    intro: `One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for`,
    experienceText: `Bring win-win survival techniques to the table. victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.`,
    stats: [
      { label: "Surgery", value: 55 },
      { label: "Medicine", value: 73 },
      { label: "Healthcare", value: 90 },
    ],
    social: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Dr. Sumiya Ahmed",
    title: "Women's Health Specialist",
    specialty: "Internal Medicine & Diabetology",
    email: "info@example.com",
    phone: "+208-6866-0112",
    address: "123 Main Street, NY",
    experience: "3-5 years",
    about: `Our doctors are more than just healthcare professionals — they're compassionate caregivers, committed to providing personalized, expert medical care. With years of experience and deep knowledge in their respective fields, our doctors ensure that patients receive the best possible treatment and support.`,
    intro: `One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for`,
    experienceText: `Bring win-win survival techniques to the table. victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.`,
    stats: [
      { label: "Surgery", value: 55 },
      { label: "Medicine", value: 73 },
      { label: "Healthcare", value: 90 },
    ],
    social: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Dr. Arif Hossain",
    title: "Online Consultation Expert",
    specialty: "Internal Medicine & Diabetology",
    email: "info@example.com",
    phone: "+208-6866-0112",
    address: "123 Main Street, NY",
    experience: "3-5 years",
    about: `Our doctors are more than just healthcare professionals — they're compassionate caregivers, committed to providing personalized, expert medical care. With years of experience and deep knowledge in their respective fields, our doctors ensure that patients receive the best possible treatment and support.`,
    intro: `One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for`,
    experienceText: `Bring win-win survival techniques to the table. victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.`,
    stats: [
      { label: "Surgery", value: 55 },
      { label: "Medicine", value: 73 },
      { label: "Healthcare", value: 90 },
    ],
    social: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
    },
  },
];

const socialIcons = {
  facebook: (
    <FaFacebook />
  ),
  instagram: (
    <FaTwitter />
  ),
  youtube: (
    <RiInstagramFill />
  ),
  twitter: (
    <IoLogoYoutube />
  ),
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl p-3">
        {teamMembers.map((member, idx) => (
          <Link href={`/detailTeam/${member.id}`} key={idx}>
            <div

              className={`flex flex-col items-center bg-gray-100 rounded-2xl shadow-sm p-6 transition-all duration-300 border-2 border-transparent hover:shadow-md hover:border-blue-300 group`}
            >
              <div
                className={`rounded-full border-4 transition-all duration-300 mb-4 border-gray-200 group-hover:border-blue-300`}
                style={{ width: 120, height: 120, overflow: "hidden" }}
              >
                <Image
                  src={`https://meditics.temptics.com/assets/img/team-member-1.jpg`}
                  alt={member.name} width={300} height={300}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.title}</p>
                <div className="flex justify-center gap-3">
                  {Object.entries(member.social).map(([key, link]) => (
                    <a
                      key={key}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-[var(--totaGreen)] hover:text-black text-gray-600 rounded-md p-2 transition-colors duration-200 shadow-sm"
                    >
                      {socialIcons[key as keyof typeof socialIcons]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
