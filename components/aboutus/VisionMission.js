import React from 'react';
import Image from "next/image";
import visionIcon from '@/images/aboutus/fold2image1.svg';
import missionIcon from '@/images/aboutus/fold2image2.svg';
import expertiseIcon from '@/images/aboutus/fold2image3.svg';

const VisionMission = () => {
  const sectionData = [
    {
      id: 1,
      title: "Our Vision",
      icon: visionIcon,
      description: "To be a global leader in green energy innovation, advancing power generation and distribution through sustainable solutions that enhance efficiency, uphold environmental responsibility, and empower industries to thrive."
    },
    {
      id: 2,
      title: "Our Mission",
      icon: missionIcon,
      description: "To deliver reliable, innovative, and safe energy solutions by providing exceptional service, prioritizing quality workmanship, and staying at the forefront of industry advancements, all while fostering a culture of safety and customer satisfaction."
    },
    {
      id: 3,
      title: "Our Expertise",
      icon: expertiseIcon,
      description: "Our team consists of highly skilled engineers, designers, and marketing professionals dedicated to creating impactful and sustainable products. We work closely with both businesses and individuals, offering customized solutions that reduce costs, boost efficiency, and promote a greener future."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sectionData.map((item) => (
        <div 
          key={item.id} 
          className="relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <Image 
                src={item.icon} 
                alt={item.title} 
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-[32px] font-normal text-[#1E62AF] my-4 text-center">
            {item.title}
          </h3>
          
          {/* Description */}
          <p className="text-[#878680] leading-relaxed text-sm text-center">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VisionMission;