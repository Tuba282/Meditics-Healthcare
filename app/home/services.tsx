
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Card from "@mui/material/Card";
import { BsHeartFill } from 'react-icons/bs';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import Image from 'next/image';

const cards = [

    {
        title: 'General Health Check-Ups',
        description: 'Regular health check-ups help detect potential issues early, ensuring timely treatment, better.',
        icon: <svg className='fill-[#0d6dfd]! group-hover:fill-white!' height="38" viewBox="0 0 64 64" width="32" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="m15 2c-4.4183 0-8 3.58172-8 8v44c0 4.4183 3.5817 8 8 8h34c4.4183 0 8-3.5817 8-8v-44c0-4.41828-3.5817-8-8-8zm30 16c0 1.1046-.8954 2-2 2h-8c-1.1046 0-2-.8954-2-2s.8954-2 2-2h8c1.1046 0 2 .8954 2 2zm-17 7c1.1046 0 2-.8954 2-2s-.8954-2-2-2h-2v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2h2v2c0 1.1046.8954 2 2 2s2-.8954 2-2v-2zm15 4c1.1046 0 2-.8954 2-2s-.8954-2-2-2h-8c-1.1046 0-2 .8954-2 2s.8954 2 2 2zm2 7c0 1.1046-.8954 2-2 2h-22c-1.1046 0-2-.8954-2-2s.8954-2 2-2h22c1.1046 0 2 .8954 2 2zm-2 11c1.1046 0 2-.8954 2-2s-.8954-2-2-2h-22c-1.1046 0-2 .8954-2 2s.8954 2 2 2z" fillRule="evenodd"></path>
        </svg>
    },
    {
        title: 'Stress & Lifestyle Counseling',
        description: 'Personalized counseling to manage stress, improve sleep, build healthy habits, and create a balanced lifestyle',
        icon: <svg className='fill-[#0d6dfd]! group-hover:fill-white!' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-miterlimit="2" viewBox="0 0 510 510" width="37" height="39" xmlns="http://www.w3.org/2000/svg">
            <path d="m247.656 426.38-66.246-22.15v-85.539l-40.484 42.341-67.328 25.739c-6.9 2.279-14.462 1.303-20.558-2.653-6.096-3.955-10.069-10.463-10.8-17.693l-.125-1.233c-1.097-10.852 5.272-21.077 15.496-24.877l68.193-28.649 53.777-58.242c11.807-11.807 25.825-10.611 41.038-10.611h68.762c15.213 0 29.231-1.196 41.038 10.611l53.777 58.242 68.193 28.649c10.224 3.8 16.593 14.025 15.496 24.877l-.125 1.233c-.731 7.23-4.704 13.738-10.8 17.693-6.096 3.956-13.658 4.932-20.558 2.653l-67.328-25.739-40.484-42.341v80.628zm7.344-311.561c27.892 0 50.537 22.645 50.537 50.537s-22.645 50.537-50.537 50.537-50.537-22.645-50.537-50.537 22.645-50.537 50.537-50.537zm-46.035 367.816c1.023 3.817 2.525 7.387 4.426 10.657l-88.393-18.004c-8.89-2.382-16.47-8.198-21.072-16.169s-5.849-17.444-3.467-26.334 8.199-16.471 16.169-21.073c7.971-4.602 17.444-5.849 26.334-3.467l82.584 27.613c-14.34 10.354-21.399 28.796-16.601 46.7v.002c.007.025.014.05.02.075zm185.889-49.85c2.382 8.89 1.135 18.363-3.467 26.334s-12.182 13.787-21.072 16.169l-113.954 23.211c-14.246 2.738-28.186-5.993-31.941-20.005l-.02-.077c-3.755-14.012 3.953-28.544 17.658-33.295l110.293-36.877c8.89-2.382 18.363-1.135 26.334 3.467 7.97 4.602 13.787 12.183 16.169 21.073zm-131.829-378.955c0 4.415-3.585 8-8 8-4.416 0-8-3.585-8-8v-34.83c0-4.415 3.584-8 8-8 4.415 0 8 3.585 8 8zm-112.595 25.881c2.205 3.825.889 8.721-2.936 10.926-3.826 2.205-8.721.889-10.926-2.936l-17.39-30.173c-2.205-3.826-.89-8.722 2.936-10.926 3.825-2.205 8.721-.889 10.926 2.936zm-84.528 78.719c3.822 2.209 5.132 7.107 2.923 10.929-2.21 3.823-7.107 5.133-10.93 2.923l-30.173-17.44c-3.823-2.209-5.132-7.107-2.923-10.929 2.21-3.823 7.107-5.133 10.93-2.923zm307.525-70.721c-2.209 3.823-7.107 5.133-10.929 2.923-3.823-2.209-5.133-7.107-2.923-10.93l17.44-30.173c2.209-3.822 7.106-5.132 10.929-2.922 3.823 2.209 5.133 7.107 2.923 10.929zm78.732 84.57c-3.821 2.213-8.719.906-10.931-2.915-2.213-3.821-.906-8.719 2.915-10.932l30.123-17.439c3.821-2.213 8.72-.906 10.932 2.915s.906 8.719-2.915 10.931z"></path>
        </svg>
    },
    {
        title: 'Referral to Specialists',
        description: 'Accurate assessments with timely referrals to trusted medical specialists, ensuring you receive expert care',
        icon: <svg className='fill-[#0d6dfd]! group-hover:fill-white!' enable-background="new 0 0 50 50" height="39" viewBox="0 0 50 50" width="35" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="m8.7 9.2c.5 2 2.3 3.5 4.5 3.5 2.1 0 4-1.5 4.5-3.5.6-.2 1.1-.9 1.1-1.6s-.4-1.2-.9-1.5v-1.9c0-1.7-1.3-3-3-3h-3.2c-1.7 0-3 1.3-3 3v1.9c-.7.4-1 .9-1 1.6s.4 1.3 1 1.5z"></path>
                <path d="m7.1 24.6h12.2c1.5 0 2.8-1 3.1-2.5.1-.7.2-1.5.2-2.1 0-3.2-1.6-5.3-4.8-6.2l-.6-1.2c-.1-.2-.3-.3-.5-.4-.2 0-.5 0-.6.2l-2.9 2.4-2.9-2.4c-.2-.1-.4-.2-.6-.2s-.4.2-.5.4l-.6 1.2c-3.1.9-4.8 3-4.8 6.2 0 .7.1 1.4.2 2.1.3 1.5 1.6 2.5 3.1 2.5z"></path>
                <path d="m32.7 9.2c.5 2 2.3 3.5 4.5 3.5 2.1 0 4-1.5 4.5-3.5.6-.2 1.1-.9 1.1-1.6s-.4-1.2-.9-1.5v-1.9c0-1.7-1.3-3-3-3h-3.2c-1.6 0-3 1.3-3 3v1.9c-.6.3-1 .9-1 1.5-.1.8.3 1.4 1 1.6z"></path>
                <path d="m41.2 12.6c-.1-.2-.3-.3-.5-.4-.2 0-.5 0-.6.2l-2.9 2.4-2.9-2.4c-.2-.1-.4-.2-.6-.2s-.4.2-.5.4l-.6 1.2c-3.2.9-4.8 3-4.8 6.2 0 .7.1 1.4.2 2.1.3 1.5 1.6 2.5 3.1 2.5h12.2c1.5 0 2.8-1 3.1-2.5.1-.7.2-1.5.2-2.1 0-3.2-1.6-5.3-4.8-6.2z"></path>
                <path d="m29.8 37.9-.6-1.2c-.1-.2-.3-.3-.5-.4-.2 0-.5 0-.6.2l-2.9 2.5-2.9-2.4c-.2-.1-.4-.2-.6-.2s-.4.2-.5.4l-.6 1.2c-3.2.9-4.8 3-4.8 6.2 0 .7.1 1.4.2 2.1.3 1.5 1.6 2.5 3.1 2.5h12.2c1.5 0 2.8-1 3.1-2.5.1-.7.2-1.5.2-2.1 0-3.3-1.6-5.4-4.8-6.3z"></path>
                <path d="m20.6 28.3v1.9c-.5.3-.9.8-.9 1.5s.4 1.3 1.1 1.6c.5 2 2.3 3.5 4.5 3.5s4-1.5 4.5-3.5c.6-.2 1.1-.9 1.1-1.6s-.4-1.2-.9-1.5v-1.9c0-1.6-1.3-3-3-3h-3.2c-1.9.1-3.2 1.4-3.2 3z"></path>
                <path d="m6.3 26.1c0-.4-.4-.7-.8-.7s-.7.4-.7.8c.4 6.3 3.7 12.2 9 15.8.1.1.3.1.4.1.2 0 .5-.1.6-.3.2-.3.1-.8-.2-1-4.8-3.4-7.9-8.9-8.3-14.7z"></path>
                <path d="m44.8 26.2c-.4-.1-.8.3-.8.7-.5 5.2-3.2 10-7.4 13.2-.3.2-.4.7-.1 1.1.1.2.4.3.6.3s.3 0 .5-.2c4.5-3.4 7.4-8.6 8-14.2-.1-.5-.4-.9-.8-.9z"></path>
                <path d="m20.1 6.8c3.3-.9 6.9-.9 10.2 0h.2c.3 0 .6-.2.7-.5.1-.4-.1-.8-.5-.9-3.6-1-7.4-1-11 0-.4.1-.6.5-.5.9s.5.6.9.5z"></path>
                <path d="m28.7 8.7h.2c.3 0 .7-.2.7-.6.1-.4-.2-.8-.6-.9-2-.4-4.2-.5-6.3-.2-.4.1-.7.4-.7.8s.4.7.8.6c2-.2 4-.1 5.9.3z"></path>
                <path d="m22.5 4.1c2.1-.3 4.3-.2 6.4.2h.1c.4 0 .7-.3.7-.6.1-.4-.2-.8-.6-.9-2.3-.4-4.6-.5-6.9-.2-.4.1-.7.4-.6.8.1.5.5.8.9.7z"></path>
                <path d="m4.6 29.6c-.1-.4-.5-.7-.9-.6s-.7.5-.6.9c.8 3.4 2.4 6.7 4.6 9.4.1.2.4.3.6.3s.3-.1.5-.2c.3-.3.4-.7.1-1.1-2.1-2.4-3.5-5.5-4.3-8.7z"></path>
                <path d="m8.2 28.9c-.4.1-.6.5-.5.9.7 2.6 2 4.9 3.7 7 .1.2.4.3.6.3s.3-.1.5-.2c.3-.3.4-.7.1-1.1-1.6-1.9-2.8-4-3.4-6.4-.2-.4-.6-.6-1-.5z"></path>
                <path d="m46.3 30.4c-.4-.1-.8.1-.9.5-.9 3.2-2.7 6.3-5.1 8.7-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2c2.5-2.6 4.4-5.9 5.4-9.3.2-.5 0-.9-.4-1z"></path>
                <path d="m41.3 29.3c-.6 2.4-1.8 4.5-3.4 6.4-.3.3-.2.8.1 1.1.1.1.3.2.5.2s.4-.1.6-.3c1.7-2.1 3-4.4 3.7-7 .1-.4-.1-.8-.5-.9-.5-.1-.9.1-1 .5z"></path>
            </g>
        </svg>
    }
];

function SelectActionCard() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                gap: 4,
            }}
            className="justify-center items-center flex-wrap"

        >
            {cards.map((card) => (
                <Card className='my-5 w-80! ' key={card.title}>
                    <CardActionArea className=''
                    >
                        <CardContent className='h-60 group flex flex-col gap-3 p-5 rounded-2! border-2 hover:border-[var(--lightBlue)]  transition-all duration-300'>
                            <div className="w-16 h-16 bg-[#F2F2F2] group-hover:bg-[#0d6dfd]  rounded flex items-center justify-center mb-2">
                                {card.icon}
                            </div>
                            <Typography >
                                {card.title}
                            </Typography>
                            <Typography variant="body2" className=' text-xs font-medium'>
                                {card.description}
                            </Typography>
                            <p data-aos="fade-up" data-aos-duration="3000" className="text-black hover:text-[var(--lightBlue)] flex gap-3 items-center text-xs font-medium">Learn More <HiOutlineArrowTrendingUp /></p>

                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}


const Services = () => {
    return (
        <div className='relative min-h-[500px] bg-[#F2F2F2] flex flex-col justify-center items-center p-10 my-5 sm:my-10 md:my-20 px-5 lg:p-20'>
            <span className='w-50 py-1 my-3 px-3 text-sm flex justify-center items-center gap-3 text-[var(--lightBlue)]  rounded-full border-1 border-[var(--lightBlue)] '><BsHeartFill /> Services I Provide <BsHeartFill /></span>
            <h1 className='group text-center text-3xl sm:text-4xl font-bold mb-5 grid gap-2'>Medical Services I Provide
                {/* <div className="bg-[var(--darkBlue)] rounded-2xl h-[3px] w-0 transition-all duration-500 group-hover:w-130"></div> */}
            </h1>
            <Image src="https://meditics.temptics.com/assets/img/service-vector-1.svg" width={200} height={200} className="w-auto! h-auto! absolute top-0 left-0 object-contain" alt="Doctor" />
            <Image src="https://meditics.temptics.com/assets/img/service-vector-2.svg" width={200} height={200} className="w-auto! h-auto! absolute top-0 right-0 object-contain" alt="Doctor" />

            <SelectActionCard />
        </div>
    )
}


export default Services;