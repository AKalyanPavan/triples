import Image from "next/image"
import HeadingMultiColour from '@/components/HeadingMultiColour.js'
import fold3image1 from '@/images/commercial-landing-page2/fold3image1.png'
import bulletPoint from '@/images/commercial-landing-page2/bullet-point.svg'
import { fold3 } from "./Variables.js"

export default function Fold3() {
	return(
		<div className="flex justify-between mx-auto my-[100px] items-center gap-10">
			<div className="lg:w-[480px]">
				<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] lg:max-w-[400px]" textLeft="Perfect for " textRight="High-Reliability Operations" />
				<div className="text-[#878680] my-[30px]">
					If your facility cannot afford power interruptions or spiraling EB bills, this solar solution is designed to:
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