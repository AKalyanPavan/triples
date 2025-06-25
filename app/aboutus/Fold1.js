"use client";

import Image from 'next/image';
import fold1image2 from '@/images/aboutus/fold1image2.png';

const Fold1 = () => {
  return (
    <section className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-200 to-transparent rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-200 to-transparent rounded-full opacity-20 blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - About Us Text */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="bg-[#1E62AF] rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                  About <span className="text-[#E6A424]">Us</span>
                </h1>
                
                <div className="space-y-4 text-white/90 text-base lg:text-lg leading-relaxed">
                  <p>
                    Welcome to Triples Solar, your trusted partner for innovative, sustainable energy 
                    solutions. Founded in 2020, we are an environmentally conscious pioneer of India Power Solar 
                    industry, offering a wide range of products and services designed to meet your unique energy 
                    needs.
                  </p>
                </div>

                {/* Decorative line */}
                <div className="mt-8 w-20 h-1 bg-[#E6A424] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Solar Panels Image */}
          <div className="relative z-10 order-1 lg:order-2">
            <div className="relative">
              {/* Main solar panels image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={fold1image2}
                  alt="Solar panels in green field with blue sky"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                
                {/* Gradient overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#E6A424] rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#1E62AF] rounded-full opacity-60 animate-pulse delay-300"></div>
              
              {/* Decorative geometric shapes */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 border-4 border-[#E6A424]/30 rounded-lg rotate-12 hidden lg:block"></div>
              <div className="absolute bottom-1/3 -right-6 w-12 h-12 border-4 border-[#1E62AF]/40 rounded-full hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 lg:h-20"
        >
          <path 
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Fold1;