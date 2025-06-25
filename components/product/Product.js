import { Header } from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import { ProductCard } from "@/components/product/ProductCard.js"

export default function Product() {
	return(
		<>
			<Header />
			<div className="bg-gradient-to-t from-[#E6A4240D] to-[#1E62AF1A]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] xl:flex">
					<div className="xl:max-w-[520px] pt-30">
						<HeadingMultiColour customStyle="sm:text-[48px] text-[32px]" textLeft="TATA Power Solar Rooftop Solutions " textRight="By Triples Energy" />
						<div className="text-[20px] leading-[28px] my-[20px] tracking-[2.4px]">Unleash the Power of the Sun – Save More, Live Smarter</div>
						<div className="text-[#878680] leading-[28px]">Our TATA Power Residential Solar Rooftop Systems are built for long-term savings, superior performance, and effortless monitoring.</div>
						<a href="/contactus" target="_blank">
							<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] cursor-pointer sm:text-[18px] font-medium mt-[30px] rounded-l-full rounded-r-full">
								<span className="text-[#ffffff] ml-[10px] font-semibold">
									<span>Contact Us</span>
								</span>
							</div>
						</a>
					</div>
					<div>
						<ProductCard />
					</div>
				</div>
			</div>
			<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] text-center my-20 leading-[57px]" textLeft="Own Your Solar Future – " textRight="Contact Us for a Personalized Quote!" />
			</div>
			<Footer />
		</>
	)
}