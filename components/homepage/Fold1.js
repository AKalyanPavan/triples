import Image from "next/image"
import { GradientText } from "@/components/ui/gradient-text"

import fold1image1 from "@/images/home/fold1/fold1image1.png"
import { fold1 } from "./Variables.js"

export default function Fold1() {
	return(
		<div className="mt-[100px] flex items-start gap-[50px]">
			<div className="min-[1100px]:w-[640px] w-full">
				<GradientText
					colors={["#E6A424", "#E6A424", "#1E62AF", "#1E62AF", "#1E62AF"]}
					animationSpeed={3}
					className="md:text-[60px] text-[40px] font-semibold sm:leading-[70px] leading-[60px]"
				>
					Empowering Tamil Nadu with Smarter Solar Solutions
				</GradientText>
				<a href="/contactus" target="_blank">
					<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium my-[50px]">
						<span className="text-[#ffffff] ml-[10px] font-semibold">
							<span>Get Started Today</span>
						</span>
					</div>
				</a>
				<div className="flex max-md:flex-col font-medium text-[#50411B] md:items-center items-start gap-[30px]">
					<div className="text-[20px] w-[213px] md:text-center">
						Authorized Partner of TATA Power Solar
					</div>
					<div className="flex items-center">
						<div className="border-solid border-x-[1px] border-[#E6A42433] px-[30px]">
							<div className="text-[64px] text-[#E6A424] leading-[70px] sm:text-center">25</div>
							<div className="">Year Warranty</div>
						</div>
						<div className="px-[30px]">
							<div className="text-[64px] text-[#E6A424] leading-[70px] sm:text-center">0<span className="font-normal">%</span></div>
							<div className="">EMI Options</div>
						</div>
					</div>
				</div>
				<div className="text-[#50411B] font-medium mt-[50px] leading-[28px] text-[16px]">
					At Triples Energy, we believe solar energy is not just a power source - it&apos;s a lifestyle upgrade. As an official partner of TATA Power Solar, India’s most trusted solar brand, we provide world-class rooftop solar solutions customized for Tamil Nadu homeowners and businesses. With over 1,000+ successful installations and ISO 9001 certification, our commitment is clear.
				</div>
			</div>
			<div className="w-[600px] max-[1100px]:hidden">
				<div className="border-solid border-[1px] border-[#E6A42480] p-[30px] rounded-[30px]">
					<Image src={fold1image1} alt="Solar Pannel" />
				</div>
				<div className="flex mt-[50px] justify-between gap-[10px] max-xl:hidden">
					{fold1.map((item, index) => (
						<div className="flex gap-[10px]" key={index}>
							<div className="bg-[#E6A424] p-[10px] rounded-[5px]">
								<Image className="w-[36px] h-[36px]" src={item.imageUrl} alt={item.title} />
							</div>
							<div className="w-[120px]">{item.title}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}