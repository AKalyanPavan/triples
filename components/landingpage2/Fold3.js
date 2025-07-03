import Image from "next/image"
import HeadingMultiColour from '@/components/HeadingMultiColour.js'
import fold3image1 from '@/images/landingpage2/fold3image1.png'
import bulletPoint from '@/images/landingpage2/bullet-point.svg'
import { fold3 } from "./Variables.js"

export default function Fold3() {
	return(
		<div className="flex justify-between mx-auto my-[100px] items-center gap-10">
			<div className="lg:w-[480px]">
				<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] lg:max-w-[400px]" textLeft="Designed for " textRight="Energy-Intensive Operations" />
				<div className="text-[#878680] my-[30px]">
					Whether your business runs high-power machinery, refrigeration systems 24/7, or large facilities with escalating electricity bills, Tata Power Solar provides a seamless solution:
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