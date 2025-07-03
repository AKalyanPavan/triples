"use client";
import Image from "next/image";

import HeadingMultiColour from "@/components/HeadingMultiColour.js"
// import { OurValues } from "@/components/aboutus/OurValues.js"
import { Header } from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import VisionMission from "./VisionMission.js"
// import fold4image1 from '@/images/aboutus/fold4image1.png';
import grid from "@/images/grid.png"
import employee from "@/images/aboutus/employee.png"
// import { SquareCheckBig, Dot } from 'lucide-react';
import ceo from "@/images/aboutus/ceo.svg";
import { values, deliveries } from "./Variables.js"

import doubleQuotesStart from "@/images/aboutus/double-quotes-start.svg"
import doubleQuotesEnd from "@/images/aboutus/double-quotes-end.svg"

import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

export default function AboutUs() {
	return(
		<>
			<Header />
			<div className="relative overflow-hidden">
				<div className="background-layer sunlight-rays"></div>
				<div className="background-layer solar-panels"></div>
				<div className="relative container mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="relative z-[3] max-w-[800px] bg-[#1E62AF] my-[100px] p-10 shadow-[1px_1px_20px_20px_rgba(0,0,0,0.15)] rounded-[10px]">
						<div className="sm:text-[48px] text-[32px] font-semibold leading-[50px] mb-5">
							<span className="text-[#E6A424]">Welcome to </span>
							<span className="text-white">Triples Solar</span>
						</div>
						<div className="text-[#E3E3E3]">
							<div>
								Your trusted partner for innovative, sustainable energy solutions. Founded in 2021 by Mr. Arutchelvan, Triples Solar is an authorized channel partner of TATA Power Solar. We offer a wide range of residential and commercial solar products and services tailored to meet your unique energy needs.
							</div>
							<div className="mt-2">
								Raghavendra Controls Private Limited, our sister concern, shares our commitment to excellence, helping us deliver integrated solutions with the highest quality standards.
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px]">
				<VisionMission />
			</section>
			<section className="mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px]">
				<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold text-center" textLeft="Our " textRight="Values" />
				{/* <OurValues /> */}
				<div className="mt-[20px] mx-auto">
					<FeaturesSectionWithHoverEffects features={values} customClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[950px]" />
				</div>
			</section>
			<section className="mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px]">
				{/*<div className="flex items-center gap-15">
					<div className="max-md:hidden max-w-[600px]">
						<Image src={fold4image1} alt="Our Services" />
					</div>*/}
					<div className="w-full font-['Jost']">
						<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold text-center w-full" textLeft="Our " textRight="Services" />
						<div className="text-[#24231D] sm:text-[32px] text-[24px] text-left mt-[30px]">
							Residential Solar Panel Solutions
						</div>
						<div className="text-[#878680] text-[20px] mt-[10px]">
							Harness the power of the sun to reduce your electricity bills and carbon footprint. Our rooftop systems are designed for 
							<br className="max-sm:hidden" />
							durability, efficiency, and ease of use.
						</div>
						<div className="text-[#24231D] sm:text-[32px] text-[24px] text-left mt-[30px]">
							Commercial & Industrial Solar Panel Solutions
						</div>
						<div className="text-[#878680] text-[20px] mt-[10px]">
							We specialize in high-quality solar installations for factories, warehouses, hospitals, schools, malls, cold storage facilities, and other commercial establishments. As a TATA Power Solar partner, we deliver:
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
					        {deliveries.map((delivery) => (
								<div 
								key={delivery.id} 
								className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 ${delivery.customStyle}`}>
								<div className="mb-4">
								  <Image 
								    src={delivery.icon} 
								    alt={`${delivery.title} icon`}
								    width={48}
								    height={48}
								    className="text-orange-500"
								  />
								</div>

								<h3 className="text-[20px] font-medium text-gray-900 mb-3 leading-tight">
								  {delivery.title}
								</h3>

								<p className="text-sm text-gray-600 leading-relaxed">
								  {delivery.description}
								</p>
								</div>
					        ))}
					    </div>
					</div>
				{/*</div>*/}
				<div className="my-[100px]">
					<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold" textLeft="CEO's " textRight="Message" />
					<div className="lg:flex items-center mt-[50px] justify-center">
						<div className="bg-gradient-to-r from-[#1E62AFB2] to-[#F9FCFF33] h-[6px] w-[150px] max-md:hidden mb-auto"></div>
						<div className="bg-gradient-to-r from-[#1E62AFA0] from-0% to-[#805B1408] to-50% p-[1.5px]">
							<div className="relative bg-[#1E62AF] text-white text-center py-[50px] max-w-[1058px]">
								<div className="rounded-full absolute w-[150px] -top-20 sm:right-0 max-sm:-right-10">
									<Image className="" src={ceo} alt="ceo" />
								</div>
								<div className="text-[20px] px-[20px]">
									Founded by Mr. K. Arutchelvan, CEO of Raghavendra Controls Private Limited
								</div>
								<div className="font-medium mx-auto mt-[30px] px-[20px] flex items-center">
									<Image src={doubleQuotesStart} alt="Double Quotes" className="mb-20 max-sm:hidden" />
									<div>
										Triples Solar embodies a passion for innovation and sustainability. Under his leadership, we strive to deliver exceptional products and customer service, helping our clients make the smart switch to clean energy while contributing to a greener planet.
									</div>
									<Image src={doubleQuotesEnd} alt="Double Quotes" className="mt-20 max-sm:hidden" />
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-r from-[#1E62AFB2] to-[#F9FCFF33] h-[6px] w-[150px] max-md:hidden mt-auto"></div>
					</div>
				</div>
				<div className="flex items-center justify-center gap-[50px] mt-[50px]">
					<div className="relative mt-[50px] w-max max-lg:hidden">
						<Image className="absolute z-[-1]" src={grid} alt="grid" />
						<div className="ml-[100px] bg-[#1E62AF] rounded-t-[50px] w-fit px-[20px]">
							<Image className="w-[350px]" src={employee} alt="technician" />
						</div>
					</div>
					{/* Why Read Our Blogs Section */}
					<div className="max-w-[600px]">
						<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] leading-[57.6px]" textLeft="Commitment to " textRight="Safety & Sustainability" />
						<div className="text-[#878680] leading-[28px] mt-[20px]">
							We are dedicated to maintaining a safe environment for our employees, customers, and partners. We adhere to strict safety measures and ensure our products meet the highest quality and safety standards. We also take responsibility for our environment by adopting eco-friendly technologies and reducing our carbon footprint.
						</div>
					</div>
				</div>
			</section>
			<section className="bg-[linear-gradient(145deg,#1E62AF0D,#E6A4240D)] py-[50px] sm:px-[50px] px-[20px]">
				<div className="bg-[#FFFFFF] md:px-[100px] px-[20px] py-[30px] max-w-[900px] mx-auto rounded-[20px] text-center">
					<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold" textLeft="Join Us " textRight="on Our Journey" />
					<div className="text-[#878680] my-[30px]">
						At Triples Solar, we invite you to explore our range of solutions, discover our passionate team, and join us in building a sustainable future. Whether you’re looking for residential or commercial solar solutions, we’re here to help you make the switch to renewable energy. 
						<br />
						Contact us to learn more about how we can serve you.
					</div>
					<a href="/contactus" target="_blank">
						<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] cursor-pointer sm:text-[18px] font-medium mt-[30px] rounded-l-full rounded-r-full mx-auto">
							<span className="text-[#ffffff] ml-[10px] font-semibold">
								<span>Contact Us</span>
							</span>
						</div>
					</a>
				</div>
			</section>
			<Footer />
		</>
	)
}