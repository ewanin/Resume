import React from 'react'

import { PiEnvelopeSimpleLight, PiPhoneCall } from "react-icons/pi";
import { FaGithub, FaRegCalendarAlt, FaGraduationCap, FaStar, FaCircle } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { TiInfoLarge } from "react-icons/ti";

import ProfileImg from '../src/assets/Image.jpg'
import InterestIcon from '../src/assets/InterestIcon.png'
import SkillsIcon from '../src/assets/SkillsIcon.png'
import Stick from '../src/assets/Stick.png'
import ProfessionalIcon from '../src/assets/ProfessionalIcon.png'
import ExtraIcon from '../src/assets/ExtraIcon.png'



const Resumw = () => {
    return (
        <div className="">

{/*                         Header Section                                       */}
            <div className="bg-secondary w-full lg:h-[250px] md:h-[200px] h-[280px] xl:px-36 lg:px-24 md:px-16 lg:py-20 md:py-16 py-6">
                <div className="md:flex block justify-between m-auto md:text-left text-center">
                    <img src={ProfileImg} alt="Profile Photo" className="lg:w-[300px] md:w-[250px] w-[150px] lg:h-[300px] md:h-[250px] h-[150px] rounded-full md:m-0 m-auto" />
                    <div className="text-white">
                        <div className="xl:text-[60px] lg:text-[50px] md:text-[38px] text-[28px] font-extrabold">Dhananjay Ninawe</div>
                        <div className="lg:text-[36px] md:text-[30px] text-[25px] ">Front-end Developer</div>
                    </div>
                </div>
            </div>


{/*                         Containt Section                                       */}
            <div className="lg:flex block xl:w-[80%] md:w-[90%] w-[95%] m-auto">
                {/*                         Left Section                                       */}
                <div className="lg:block flex flex-wrap w-[] h-full md:mt-[13%]">
{/*                         Contact Section                                       */}
                    <div className="w-fit h-full md:pb-12 pb-4 md:mt-[8%]">
                        <div className=" w-fit text-primary md:text-[30px] text-[25px] font-bold md:mb-4 mb-2 mt-5">My Contact</div>
                        <div className="flex mb-1 items-center gap-1 w-fit">
                            <PiEnvelopeSimpleLight className="text-primary md:w-[40px] w-[30px] md:h-[40px] h-[30px]" />
                            <div className="md:text-[24px] text-[18px]">ninawedhananjaypro@gmail.com</div>
                        </div>
                        <div className="flex mb-1 items-center gap-4 w-fit">
                            <PiPhoneCall className="text-primary md:w-[40px] w-[30px] md:h-[40px] h-[30px]" />
                            <div className="md:text-[24px] text-[18px]">8097223634</div>
                        </div>
                        <div className="flex mb-1 items-center gap-4 w-fit">
                            <FaGithub className="text-primary md:w-[40px] w-[30px] md:h-[40px] h-[30px]" />
                            <div className="md:text-[24px] text-[18px]">https://github.com/ewanin/</div>
                        </div>
                        <div className="flex mb-1 items-cente gap-4 w-fit">
                            <TfiLocationPin className="text-primary md:w[40px] w[30px] w-fit md:h-[40px] h-[30px] mt-2" />
                            <div className="md:text-[24px] text-[18px] w-fit lg:w-[65%] md:w-[300px] w[80%]">Krishan-A, Room No.704,
                                Vasant Sagar CHS, Thakur
                                Village, Mumbai 400101
                            </div>
                        </div>
                        <div className="flex mb-1 items-center gap-4 w-fit">
                            <FaRegCalendarAlt className="text-primary md:w-[40px] w-[30px] md:h-[40px] h-[30px]" />
                            <div className="md:text-[24px] text-[18px]">29-June-1999</div>
                        </div>
                    </div>

{/*                         Skills Section                                       */}
                    <div className="w-fit h-full md:pb-12 pb-4 mt-4">
                        <div className="flex gap-4 items-center">
                            <img src={SkillsIcon} alt="Interest Icon" className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full" />
                            <div className="text-primary md:text-[30px] text-[25px] font-bold">Skills</div>
                        </div>
                        <div className="flex">
                            <div className="">
                                <img src={Stick} alt="Stick1" className=" rotate-90 h-[17px] left-0 2xl:mt-[12.5%] xl:mt-[14.5%] lg:mt-[20.5%] md:mt-[27.5%] 2xl:-ml-[6px] xl:-ml-[30px] lg:-ml-[128px] md:ml-[33%] md:block hidden absolute" />
                            </div>
                            <div className="ml-5 md:block flex flex-wrap">

                                <div className=" md:ml-10 ml-8 pb-3">
                                    <div className="text-primary md:text-[24px] text-[18px] font-bold">HTML</div>
                                    <div className="flex gap-1">
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                    </div>
                                </div>

                                <div className=" md:ml-10 ml-8 pb-3">
                                    <div className="text-primary md:text-[24px] text-[18px] font-bold">JavaScript</div>
                                    <div className="flex gap-1">
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                    </div>
                                </div>

                                <div className=" md:ml-10 ml-8 pb-3">
                                    <div className="text-primary md:text-[24px] text-[18px] font-bold">CSS</div>
                                    <div className="flex gap-1">
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                    </div>
                                </div>

                                <div className=" md:ml-10 ml-8 pb-3">
                                    <div className="text-primary md:text-[24px] text-[18px] font-bold">FIGMA</div>
                                    <div className="flex gap-1">
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                    </div>
                                </div>

                                <div className=" md:ml-10 ml-8 pb-3">
                                    <div className="text-primary md:text-[24px] text-[18px] font-bold">Tailwind CSS</div>
                                    <div className="flex gap-1">
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                    </div>
                                </div>

                                <div className=" md:ml-10 ml-8 pb-3">
                                    <div className="text-primary md:text-[24px] text-[18px] font-bold">Bootstrap</div>
                                    <div className="flex gap-1">
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-primary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                        <FaStar className="text-secondary md:w-[24px] w-[18px] md:h-[24px] h-[18px]" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

{/*                         Interest Section                                       */}
                    <div className="w-full h-full md:pb-12 pb-4 mt-4 md:mt-0">
                        <div className="flex gap-4">
                            <img src={InterestIcon} alt="Interest Icon" className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full" />
                            <div className="text-primary md:text-[30px] text-[25px] font-bold">Interests</div>
                        </div>
                        <div className=" ml-16 lg:block flex flex-wrap justify-between ">
                            <div className="flex items-center md:gap-4 gap-2 mr-2">
                                <div className="md:w-[12px] w-[10px] md:h-[12px] h-[10px] bg-primary"></div>
                                <div className=" md:text-[24px] text-[18px]">Running</div>
                            </div>
                            <div className="flex items-center md:gap-4 gap-2 mr-2">
                                <div className="md:w-[12px] w-[10px] md:h-[12px] h-[10px] bg-primary"></div>
                                <div className=" md:text-[24px] text-[18px]">Cycling</div>
                            </div>
                            <div className="flex items-center md:gap-4 gap-2 mr-2">
                                <div className="md:w-[12px] w-[10px] md:h-[12px] h-[10px] bg-primary"></div>
                                <div className=" md:text-[24px] text-[18px]">Swimming</div>
                            </div>
                            <div className="flex items-center md:gap-4 gap-2 mr-2">
                                <div className="md:w-[12px] w-[10px] md:h-[12px] h-[10px] bg-primary"></div>
                                <div className=" md:text-[24px] text-[18px]">Reading</div>
                            </div>
                        </div>
                    </div>

                </div>


{/*                         Right Section                                       */}
                <div className=" w-full h-full" >
{/*                         About Section                                       */}
                    <div className=" mt-5 pb-6 border-b-2 border-secondary">
                        <div className="flex gap-4 items-center">
                            <TiInfoLarge className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full text-primary" />
                            <div className="text-primary md:text-[30px] text-[25px] font-bold">About Me</div>
                        </div>
                        <div className="lg:text-[24px] md:text-[22px] text-[18px] lg:ml-[50px] ml-[10px] md:leading-8 leading-7">
                            I love learning new things and am always on the lookout
                            for new opportunities to develop and grow within my
                            role, whether that’s learning new skills, taking on a new
                            project or collaborating with other departments.
                            I love a challenge and find working together to solve
                            critical business issues really rewarding.
                        </div>
                    </div>

{/*                         Education Section                                       */}
                    <div className=" mt-5 pb-6 border-b-2 border-secondary">
                        <div className="flex gap-4 items-center">
                            <FaGraduationCap className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full text-primary" />
                            <div className="text-primary md:text-[30px] text-[25px] font-bold mb-4 leading-7">Education Background</div>
                        </div>
                        <div className="flex">
                            <div className=" items-center justify-center ml-[22px] mt-3">
                                <div className="border-l-2 border-secondary lg:h-12 md:h-20 h-12  ml-[8px]"></div>
                                <div className="border-2 border-secondary p-2 rounded-full"></div>
                            </div>
                            <div className="md:ml-8 ml-4 lg:[25px] md:text-[20px] text-[18px] md:leading-7 leading-5">
                                <div className="font-bold text-secondary">Bachelor of Science in Information Technology</div>
                                <div>Mumbai University, Mumbai</div>
                                <div>June 2018 - May 2022</div>
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <div className=" items-center justify-center ml-[22px] mt-3">
                                <div className="border-l-2 border-secondary lg:h-12 md:h-20 h-12 ml-[8px]"></div>
                                <div className="border-2 border-secondary p-2 rounded-full"></div>
                            </div>
                            <div className="md:ml-8 ml-4 lg:[25px] md:text-[20px] text-[18px] md:leading-7 leading-5">
                                <div className="font-bold text-secondary">Master of Science in Computer Science</div>
                                <div>Mumbai University, Mumbai</div>
                                <div>July 2022 - Current</div>
                            </div>
                        </div>
                    </div>

{/*                         Professional Section                                       */}
                    <div className=" mt-5 pb-6 border-b-2 border-secondary">
                        <div className="flex gap-4 items-center">
                            <img src={ProfessionalIcon} alt="Interest Icon" className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full" />
                            <div className="text-primary md:text-[30px] text-[25px] font-bold mb-4 leading-7">Professional Background</div>
                        </div>
                        <div className="lg:ml-[70px] ml-[50px] lg:text-[24px] md:text-[22px] text-[18px]  md:leading-7 leading-6  mb-2">
                            <div className="font-bold text-secondary">Jr. UI/UX Designer (Intern)</div>
                            <div>Koffeetech Software Communication</div>
                            <div>May 2022 - August 2022</div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-8 leading-7 mb-1">
                            <FaCircle className="mt-2 w-[16px] h-[16px] text-primary" />
                            <div className="lg:text-[24px] md:text-[22px] text-[18px]">Collaborate with cross-functional teams to understand
                                project requirements and user needs.
                            </div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-8 leading-7 mb-1">
                            <FaCircle className="mt-2 w-[16px] h-[16px] text-primary" />
                            <div className="lg:text-[24px] md:text-[22px] text-[18px]">Assist in the creation of wireframes, prototypes, and
                                user flows to effectively communicate design ideas
                            </div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-8 leading-7 mb-1">
                            <FaCircle className="mt-2 w-[16px] h-[16px] text-primary" />
                            <div className="lg:text-[24px] md:text-[22px] text-[18px]">Support the design team in conducting user research
                                and usability testing to gather valuable feedback.
                            </div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-8 leading-7 mb-1">
                            <FaCircle className="mt-2 w-[16px] h-[16px] text-primary" />
                            <div className="lg:text-[24px] md:text-[22px] text-[18px]">Work closely with developers to ensure the
                                successfulimplementation of design concepts.
                            </div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-8 leading-7 mb-1">
                            <FaCircle className="mt-2 w-[16px] h-[16px] text-primary" />
                            <div className="lg:text-[24px] md:text-[22px] text-[18px]">Stay updated on industry trends and best practices to
                                enhance design solutions.
                            </div>
                        </div>
                    </div>

{/*                         Extracurricular Section                                       */}
                    <div className=" mt-5">
                        <div className="flex gap-4 items-center">
                            <img src={ExtraIcon} alt="Interest Icon" className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full" />
                            <div className="text-primary md:text-[30px] text-[25px] font-bold mb-4 leading-7">Extracurricular Activity</div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-0 lg:text-[24px] md:text-[22px] text-[18px]">
                            <div className="">1.</div>
                            <div className="">Participated in Mumbai Marathon</div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-0 lg:text-[24px] md:text-[22px] text-[18px]">
                            <div className="">2.</div>
                            <div className="">Participated in Vasai Virar Marathon</div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-0 lg:text-[24px] md:text-[22px] text-[18px]">
                            <div className="">3.</div>
                            <div className="">Participated in Maharashtra Police International Marathon</div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-0 lg:text-[24px] md:text-[22px] text-[18px]">
                            <div className="">4.</div>
                            <div className="">Participated in Goa Marathon</div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-0 lg:text-[24px] md:text-[22px] text-[18px]">
                            <div className="">5.</div>
                            <div className="">Participated in Rotary Run Goa Marathon</div>
                        </div>
                        <div className="flex items-cente gap-4 md:ml-10 ml-0 lg:text-[24px] md:text-[22px] text-[18px]">
                            <div className="">6.</div>
                            <div className="">Have participated in many marathons, half marathons, Ultra Marathon.</div>
                        </div>
                    </div>
                </div>
            </div>


{/*                         Footer Section                                       */}
            <div className="bg-primary w-full h-12 mt-12 "></div>

        </div>
    )
}

export default Resumw