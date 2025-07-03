import Image from "next/image"
import HeadingMultiColour from '@/components/HeadingMultiColour.js'
import { fold8 } from "./Variables.js"

export default function Fold8() {
	return(
		<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
			<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] text-center" textLeft="Get " textRight="Started Today" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-10">
				{fold8.map((item, index) => (
					<div className="flex items-center gap-5 text-[20px]" key={index}>
						<Image src={item.icon} alt={item.title} />
						<div>
							{item.title}
						</div>
					</div>
				))}
			</div>
			<a href="/contactus" target="_blank">
				<div id="bookVisitNowButton" className="mx-auto book-visit-button bg-[#E6A424] w-fit flex items-center p-3 text-center rounded-[5px] cursor-pointer sm:text-[18px] font-medium">
					<span className="text-[#ffffff] ml-[10px] font-semibold">
						<span>Schedule Your Free Consultation</span>
					</span>
				</div>
			</a>
		</div>
	)
}