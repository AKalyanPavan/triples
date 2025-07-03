import { Header } from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import { ProductCard } from "@/components/product/ProductCard.js"
import { residential, commercial } from "./Variables.js";

export default function Product() {
	return(
		<>
			<Header />
			<div className="bg-white">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-20">
					<HeadingMultiColour customStyle="sm:text-[36px] text-[32px]" textLeft="TATA Power Solar Rooftop Solutions " textRight="By Triples Energy" />
					<div className="text-[20px] leading-[28px] my-3 tracking-[2.4px]">Unleash the Power of the Sun – Save More, Live Smarter</div>
					<div className="text-[#878680]">
						Triples Energy, an authorized channel partner of TATA Power Solar, offers world-class Residential and Commercial / Industrial Solar Rooftop Systems. Designed for long-term savings, exceptional performance, and hassle-free monitoring, our solutions empower both homes and businesses to cut costs, reduce carbon footprint, and secure their energy future.
					</div>
				</div>
			</div>
			<div className="bg-gradient-to-t from-[#E6A4240D] to-[#1E62AF1A]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="xl:flex">
						<div className="xl:max-w-[520px] pt-30">
							<HeadingMultiColour customStyle="sm:text-[36px] text-[32px]" textLeft="" textRight={residential.title} />
							<div className="leading-[28px] my-[30px]">
								{residential.description}
							</div>
							<a href="/contactus" target="_blank">
								<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] cursor-pointer sm:text-[18px] font-medium rounded-l-full rounded-r-full">
									<span className="text-[#ffffff] ml-[10px] font-semibold">
										<span>Contact Us</span>
									</span>
								</div>
							</a>
						</div>
						<div>
							<ProductCard keyFeatures={residential.keyFeatures} benefits={residential.benefits} exclusiveOffers={residential.exclusiveOffers} />
						</div>
					</div>
				</div>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
					<div className="xl:flex">
						<div className="xl:max-w-[520px] pt-30">
							<HeadingMultiColour customStyle="sm:text-[36px] text-[32px]" textLeft="" textRight={commercial.title} />
							<div className="leading-[28px] my-[30px]">
								{commercial.description}
							</div>
							<a href="/contactus" target="_blank">
								<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] cursor-pointer sm:text-[18px] font-medium rounded-l-full rounded-r-full">
									<span className="text-[#ffffff] ml-[10px] font-semibold">
										<span>Contact Us</span>
									</span>
								</div>
							</a>
						</div>
						<div>
							<ProductCard keyFeatures={commercial.keyFeatures} benefits={commercial.benefits} perfectFor={commercial.perfectFor} exclusiveOffers={commercial.exclusiveOffers} />
						</div>
					</div>
				</div>
			</div>
			<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
				<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] text-center leading-[57px]" textLeft="Own Your Solar Future – " textRight="Contact Us for a Personalized Quote!" />
				<div className="text-[20px] leading-[28px] my-5 tracking-[2.4px] text-center">Own Your Solar Future – Contact Us for a Personalized Quote!</div>
				<div className="text-[#878680] text-center">
					Whether you’re looking to reduce your home electricity bills or transform your business with clean, cost-saving energy, Triples Energy has the right TATA Power Solar solution for you.
				</div>
				<a href="/contactus" target="_blank">
					<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[30px] cursor-pointer sm:text-[18px] font-medium rounded-l-full rounded-r-full mx-auto mt-5">
						<span className="text-[#ffffff] ml-[10px] font-semibold">
							<span>Let’s build <span className="max-sm:hidden">a brighter, greener, and smarter</span> future—together.</span>
						</span>
					</div>
				</a>
			</div>
			<Footer />
		</>
	)
}