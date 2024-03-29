import React, { useState } from 'react';
import dataEnglish from '../public/LanguageData/EngData.js'; // Import English data
import dataHindi from '../public/LanguageData/HinData.js'; // Import Hindi data
import dataMarathi from '../public/LanguageData/MarData.js'; // Import Marathi data
import newData from '../public/newData.js';

const Resume = () => {
    const [language, setLanguage] = useState('english');
    let data;

    switch (language) {
        case 'hindi':
            data = dataHindi;
            break;
        case 'marathi':
            data = dataMarathi;
            break;
        default:
            data = dataEnglish;
    }

    return (
        <div className="">

            {/* Language Dropdown */}
            <div className="fle justify-end px-4 py-2 absolute righ-0">

                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md shadow-md focus:outline-none"
                >
                    {newData.langData.map((item) => (
                        <>
                            <option value={item.value}>{item.name}</option>
                        </>
                    ))}

                </select>

            </div>


            {/* Header Section */}
            <div className="bg-secondary w-full lg:h-[250px] md:h-[200px] h-[280px] xl:px-36 lg:px-24 md:px-16 lg:py-20 md:py-16 py-6">

                {/* Header Data Map Function */}
                {data.headerData.map((item) => (
                    <div className="md:flex block justify-between m-auto md:text-left text-center" key={item.id}>
                        <img src={item.image} alt="Profile Photo" className="lg:w-[300px] md:w-[250px] w-[150px] lg:h-[300px] md:h-[250px] h-[150px] rounded-full md:m-0 m-auto" />
                        <div className="text-white">
                            <div className="xl:text-[60px] lg:text-[50px] md:text-[38px] text-[28px] font-extrabold">{item.name}</div>
                            <div className="lg:text-[36px] md:text-[30px] text-[25px] ">{item.position}</div>
                        </div>
                    </div>
                ))}

            </div>


            {/* Content Section */}
            <div className="lg:flex block xl:w-[80%] md:w-[90%] w-[95%] m-auto">

                {/* Left Section */}
                <div className="lg:block flex flex-wrap w-[] h-full md:mt-[13%]">

                    {/* Contact Section */}
                    <div className="md:w-[59%] lg:w-fit h-full md:pb-12 pb-4 md:mt-[8%] mt-5">

                        {/* Contact Heading and Icon Map Function */}
                        {data.icons[0].contact.map(item => (
                            <div className="flex gap-4 items-center" key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="Interest Icon"
                                    className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full"
                                />
                                <div className="text-primary md:text-[30px] text-[25px] font-bold">{item.name}</div>
                            </div>
                        ))}
                        {/* Contact Data Map Function */}
                        {data.contData.map((item) => (
                            <div className='flex mb-1  gap-4 w-fit items-center' key={item.id}>
                                <img src={item.icon} alt={item.name} className='text-primary md:w-[40px] w-[25px] md:h-[40px] h-[25px] md:mt-2 mt-1' />
                                <div className="md:text-[24px] text-[18px] w-fit">{item.name}</div>
                            </div>
                        ))}

                    </div>

                    {/* Skills Section */}
                    <div className="w-fit h-full md:pb-12 pb-4 mt-4">

                        {/* Skills Heading and Icon Map Function */}
                        {data.icons[0].skills.map(item => (
                            <div className="flex gap-4 items-center" key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="Interest Icon"
                                    className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full"
                                />
                                <div className="text-primary md:text-[30px] text-[25px] font-bold">{item.name}</div>
                            </div>
                        ))}
                        {/* Skills Data Map Function */}
                        <div className="flex">
                            <div className="ml-5 mr-3 md:block flex flex-wrap justify-between">
                                {data.skillData.map((item) => (
                                    <div className=" md:ml-10 ml-8 pb-3" key={item.id}>
                                        <div className="text-primary md:text-[24px] text-[18px] font-bold">{item.name}</div>
                                        <img src={item.image} alt="stars" className='md:w-[125px] w-[100px] md:h-[23px] h-[17px]' />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Interest Section */}
                    <div className="w-full h-full md:pb-12 pb-4 mt-4 md:mt-0">

                        {/* Interest Heading and Icon Map Function */}
                        {data.icons[0].interest.map(item => (
                            <div className="flex gap-4 items-center" key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="Interest Icon"
                                    className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full"
                                />
                                <div className="text-primary md:text-[30px] text-[25px] font-bold">{item.name}</div>
                            </div>
                        ))}
                        {/* Interest Data Map Function */}
                        <div className=" ml-16 lg:block flex flex-wrap justify-between ">
                            {data.intData.map((item) => (
                                <div className='flex items-center md:gap-4 gap-2 mr-2' key={item.id}>
                                    <div className=" md:w-[12px] w-[10px] md:h-[12px] h-[10px] bg-primary"></div>
                                    <div className=" md:text-[24px] text-[18px]">{item.name}</div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>


                {/* Right Section */}
                <div className="w-full h-full">

                    {/* About Section */}
                    <div className="mt-5 pb-6 border-b-2 border-secondary">

                        {/* About Heading and Icon Map Function */}
                        {data.icons[0].about.map(item => (
                            <div className="flex gap-4 items-center" key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="Interest Icon"
                                    className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full"
                                />
                                <div className="text-primary md:text-[30px] text-[25px] font-bold">{item.name}</div>
                            </div>
                        ))}
                        {/* About Data Map Function */}
                        {data.aboutData.map((item) => (
                            <div className="lg:text-[24px] md:text-[22px] text-[18px] lg:ml-[50px] ml-[10px] md:leading-8 leading-7" key={item.id}>{item.data}</div>
                        ))}

                    </div>

                    {/* Education Section */}
                    <div className="mt-5 pb-6 border-b-2 border-secondary">

                        {/* Education Heading and Icon Map Function */}
                        {data.icons[0].education.map(item => (
                            <div className="flex gap-4 items-center" key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="Interest Icon"
                                    className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full"
                                />
                                <div className="text-primary md:text-[30px] text-[25px] font-bold">{item.name}</div>
                            </div>
                        ))}
                        {/* Education Data Map Function */}
                        {data.edData.map((item) => (
                            <div className="flex" key={item.id}>
                                <div className="items-center justify-center ml-[22px] mt-3">
                                    <div className="border-l-2 border-secondary  h-[75%] ml-[8px]"></div>
                                    <div className="border-2 border-secondary p-2 rounded-full h-[20%]"></div>
                                </div>
                                <div className="md:ml-8 ml-4 md:leading-7 leading-5 mt-2">
                                    <div className="font-bold text-secondary lg:text-[25px] md:text-[20px] text-[18px]">{item.head}</div>
                                    <div className='lg:text-[22px] md:text-[18px] text-[17px]'>{item.subhead}</div>
                                    <div className='lg:text-[22px] md:text-[18px] text-[17px]'>{item.date}</div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Professional Section */}
                    <div className="mt-5 pb-6 border-b-2 border-secondary">

                        {/* Professional Heading and Icon Map Function */}
                        {data.icons[0].professional.map(item => (
                            <div className="flex gap-4 items-center" key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="Interest Icon"
                                    className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full"
                                />
                                <div className="text-primary md:text-[30px] text-[25px] font-bold">{item.name}</div>
                            </div>
                        ))}
                        {/* Professional Sub-Heading Data Map Function */}
                        {data.profData[0].data1.map((item) => (
                            <div className="lg:ml-[70px] ml-[50px] md:leading-7 leading-6 mb-2" key={item.id}>
                                <div className="font-bold text-secondary lg:text-[24px] md:text-[22px] text-[18px]">{item.head}</div>
                                <div className='lg:text-[22px] md:text-[20px] text-[17px]'>{item.subhead}</div>
                                <div className='lg:text-[22px] md:text-[20px] text-[17px]'>{item.duration}</div>
                            </div>
                        ))}
                        {/* Professional Heading Data Map Function */}
                        {data.profData[0].data2.map((item) => (
                            <div className="flex gap-4 md:ml-10 ml-8 leading-7 mb-1" key={item.id}>
                                <img src='/Icons/dot.svg' alt="" className="mt-2 w-[16px] h-[16px] text-primary" />
                                <div className="lg:text-[24px] md:text-[22px] text-[18px]">{item.name}</div>
                            </div>
                        ))}

                    </div>

                    {/* Extracurricular Section */}
                    <div className="mt-5">

                        {/* Extracurricular Heading and Icon Map Function */}
                        {data.icons[0].activity.map(item => (
                            <div className="flex gap-4 items-center" key={item.id}>
                                <img
                                    src={item.icon}
                                    alt="Interest Icon"
                                    className="xl:w-[60px] md:w-[50px] w-[40px] xl:h-[60px] md:h-[50px] h-[40px] p-1 border-primary xl:border-[5px] border-[4px] rounded-full"
                                />
                                <div className="text-primary md:text-[30px] text-[25px] font-bold">{item.name}</div>
                            </div>
                        ))}
                        {/* Extracurricular Data Map Function */}
                        {data.extraData.map((item) => (
                            <div className="flex gap-4 md:ml-10 ml-0 lg:text-[24px] md:text-[22px] text-[18px]" key={item.id}>
                                <div className=" from-primary text-primary font-medium">{item.id}.</div>
                                <div className="">{item.name}</div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>


            {/* Footer Section */}
            <div className="bg-primary w-full h-12 mt-12"></div>

        </div>
    );
};

export default Resume;
