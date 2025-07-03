import Image from "next/image"
import HeadingMultiColour from '@/components/HeadingMultiColour.js'
import fold6image1 from '@/images/landingpage2/fold6image1.png'
import bulletPoint from '@/images/landingpage2/bullet-point.svg'
import { fold6 } from "./Variables.js"

export default function Fold6() {
	return(
		<div className="flex justify-between mx-auto my-[100px] items-center lg:gap-10">
			<div>
				<Image className="w-[530px] rounded-[10px] max-lg:hidden" src={fold6image1} alt="male-worker-blue-uniform-outdoors-with-solar-batteries-sunny-day" />
			</div>
			<div className="max-lg:mx-auto">
				<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] max-lg:text-center" textLeft="Why " textRight="Tata Power Solar?" />
				<div className="flex flex-col gap-5 lg:pl-10 mt-5">
					{fold6.map((item, index) => (
						<div className="flex items-start gap-3" key={index}>
							<Image src={bulletPoint} alt="Bullet Point" className="mt-1" />
							<div className="text-[#878680]">
								{item}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}