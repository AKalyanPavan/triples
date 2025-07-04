import Image from "next/image"
import HeadingMultiColour from '@/components/HeadingMultiColour.js'
import fold3image1 from '@/images/commercial-landing-page3/fold3image1.png'
import bulletPoint from '@/images/commercial-landing-page3/bullet-point.svg'
import { fold3 } from "./Variables.js"

export default function Fold3() {
	return(
		<div className="flex justify-between mx-auto my-[100px] items-center gap-10">
			<div className="lg:w-[600px]">
				<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] lg:w-full" textLeft="Ideal for " textRight="High-Consumption Commercial Properties" />
				<div className="text-[#878680] my-[30px]">
					If your property has significant energy needs—lighting, HVAC, escalators, lifts, common areas—this solar solution is built for you:
				</div>
				<div className="flex flex-col gap-5">
					{fold3.map((item, index) => (
						<div className="flex items-start gap-3" key={index}>
							<Image src={bulletPoint} alt="Bullet Point" className="mt-1" />
							<div className="text-[#878680]">
								{item}
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<Image className="w-[530px] rounded-[10px] max-lg:hidden" src={fold3image1} alt="male-worker-blue-uniform-outdoors-with-solar-batteries-sunny-day" />
			</div>
		</div>
	)
}