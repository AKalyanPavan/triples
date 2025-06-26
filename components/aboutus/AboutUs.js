"use client";
import Image from "next/image";

import HeadingMultiColour from "@/components/HeadingMultiColour.js"

import { Header } from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import VisionMission from "./VisionMission.js"
import fold4image1 from '@/images/aboutus/fold4image1.png';
import grid from "@/images/grid.png"
import employee from "@/images/aboutus/employee.png"

export default function AboutUs() {
	return(
		<>
			<Header />
			<div className="relative overflow-hidden">
				<div className="background-layer sunlight-rays"></div>
				<div className="background-layer solar-panels"></div>
				<div className="relative container mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="relative z-[3] max-w-[800px] bg-[#1E62AF] my-[100px] p-15 shadow-[1px_1px_20px_20px_rgba(0,0,0,0.15)] rounded-[10px]">
						<div className="text-[48px] font-semibold">
							<span className="text-[#E6A424]">About </span>
							<span className="text-white">Us</span>
						</div>
						<div className="text-[#E3E3E3]">
							Welcome to Triples Solar, your trusted partner for innovative, sustainable energy solutions. Founded in 2021, we are an authorized channel partner of TATA Power Solar, offering a wide range of products and services designed to meet your unique energy needs.
						</div>
					</div>
				</div>
			</div>
			<section className="mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px]">
				<VisionMission />
			</section>
			<section className="mx-auto max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px]">
				<div className="flex items-center gap-15">
					<div className="max-md:hidden max-w-[600px]">
						<Image src={fold4image1} alt="Our Services" />
					</div>
					<div className="">
						<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold" textLeft="Our " textRight="Services" />
						<div className="text-[20px] text-[#24231D] font-medium">Solar Rooftop Systems</div>
						<div className="text-[#878680] my-[20px]">
							Harness the power of the sun with our high-quality solar solutions, designed to reduce your electricity bills and carbon footprint.
						</div>
						<a href="/contactus" target="_blank">
							<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] cursor-pointer sm:text-[18px] font-medium mt-[30px] rounded-l-full rounded-r-full">
								<span className="text-[#ffffff] ml-[10px] font-semibold">
									<span>Contact Us</span>
								</span>
							</div>
						</a>
					</div>
				</div>
				<div className="my-[100px]">
					<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold" textLeft="CEO's " textRight="Message" />
					<div className="flex items-center mt-[50px] justify-center">
						<div className="bg-gradient-to-r from-[#1E62AFB2] to-[#F9FCFF33] h-[6px] w-[150px] max-md:hidden mb-auto"></div>
						<div className="bg-gradient-to-r from-[#1E62AFA0] from-0% to-[#805B1408] to-50% w-[900px] p-[1.5px]">
							<div className="bg-white text-center py-[50px]">
								<div className="text-[20px] bg-[#1E62AF] text-white px-[20px]">
									Founded by Mr. K. Arutchelvan, CEO of Raghavendra Controls Private Limited
								</div>
								<div className="text-[#878680] font-medium max-w-[600px] mx-auto mt-[30px] px-[20px]">
									Triples Solar embodies a passion for innovation and sustainability. Under his leadership, we strive to deliver exceptional products and customer service, all while contributing to a greener planet.
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
							We are dedicated to maintaining a safe environment for our employees, customers, and partners. We adhere to strict safety measures and ensure that our products meet the highest quality and safety standards. Additionally, we take responsibility for the environment by adopting eco-friendly technologies and reducing our overall carbon footprint.
						</div>
					</div>
				</div>
			</section>
			<section className="bg-[linear-gradient(145deg,#1E62AF0D,#E6A4240D)] py-[50px] sm:px-[50px] px-[20px]">
				<div className="bg-[#FFFFFF] md:px-[100px] px-[20px] py-[30px] max-w-[900px] mx-auto rounded-[20px] text-center">
					<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold" textLeft="Join Us " textRight="on Our Journey" />
					<div className="text-[#878680] my-[30px]">
						At Triples Solar, we invite you to explore our products, discover our team, and join us in shaping a sustainable future. Whether you're interested in residential solar solutions or commercial solar solutions,we are here to help you make the change to renewable energy.
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