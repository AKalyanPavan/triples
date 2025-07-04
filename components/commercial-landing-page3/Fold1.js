import Image from "next/image"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import fold1image1 from "@/images/commercial-landing-page3/fold1image1.png"
// import { fold1 } from "./Variables.js"

export default function Fold1() {
	return(
		<div className="py-[100px]">
			<div className="flex items-center gap-[50px]">
				<div className="min-[1100px]:w-[640px] w-full">
					<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] font-semibold" textLeft="Cut Costs. Enhance Value. " textRight="Power Your Property with the Sun." />
					<div className="text-[#50411B] font-medium my-[30px] leading-[28px] text-[16px]">
						Rising electricity expenses, tenant demands for green infrastructure, and the need for modern branding are real challenges for commercial property owners.Tata Power Solar delivers end-to-end solar solutions that help you slash operational costs, boost property value, and create a future-ready, sustainable facility.
					</div>
					<a href="/contactus" target="_blank">
						<div id="bookVisitNowButton" className="book-visit-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium">
							<span className="text-[#ffffff] ml-[10px] font-semibold">
								<span>Get Started Today</span>
							</span>
						</div>
					</a>
				</div>
				<div className="w-[600px] max-[1100px]:hidden">
					<div className="border-solid border-[1px] border-[#E6A42480] p-[30px] rounded-[30px]">
						<Image src={fold1image1} alt="Solar Pannel" />
					</div>
					{/*<div className="flex mt-[50px] justify-between gap-[10px] max-xl:hidden">
						{fold1.map((item, index) => (
							<div className="flex gap-[10px]" key={index}>
								<div className="bg-[#E6A424] p-[10px] rounded-[5px]">
									<Image className="w-[36px] h-[36px]" src={item.imageUrl} alt={item.title} />
								</div>
								<div className="w-[120px]">{item.title}</div>
							</div>
						))}
					</div>*/}
				</div>
			</div>
		</div>
	)
}