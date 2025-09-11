
import { MarqueeDemo } from "@/components/magicui/marquee";
import Image from "next/image";

export function Marquee() {

  const specialties: string[] = [
    "DERMATOLOGY",
    "ORTHOPEDICS",
    "NEUROLOGY",
    "CARDIOLOGY",
    "PEDIATRICS",
    "UROLOGY",
  ];

  return (
    <div className="relative bg-[var(--totaGreen)] flex w-full mt-6 flex-col items-center justify-center overflow-hidden">
      <MarqueeDemo pauseOnHover className="[--duration:20s]">

        {specialties.map((text, idx) => (
          <p key={idx + text} className='my-4 flex justify-center gap-4 items-center font-extrabold text-2xl md:text-4xl '>
            <Image src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" width={50} height={50} className="w-[30px]! h-[30px]! grayscale-100" alt="Doctor" />
            {text}
          </p>
        ))}
      </MarqueeDemo>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
