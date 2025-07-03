import Image from "next/image"
import HeadingMultiColour from '@/components/HeadingMultiColour.js'
import fold3image1 from '@/images/home/fold3/fold3image1.png'

export default function fold3() {
	return(
		<div className="flex lg:gap-[50px] justify-center mx-auto mt-[100px] items-center">
			<div className="lg:w-[470px]">
				<HeadingMultiColour customStyle="sm:text-[48px] text-[32px]" textLeft="Ready to Start Saving? " textRight="Book a Free Consultation Today!" />
				<div className="text-[#878680] my-[30px]">
					Contact us today to schedule a consultation and learn how we can help you save money, reduce your carbon footprint, and embrace the power of renewable energy.
				</div>
				<a href="/contactus" target="_blank">
					<div className="call-us-button bg-[#E6A424] w-fit flex items-center py-[10px] px-[50px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium my-[50px]">
						<span className="text-[#ffffff] ml-[10px] font-semibold">
							<span>Get Started Today</span>
						</span>
					</div>
				</a>
			</div>
			<div>
				<Image className="w-[530px] rounded-[10px] max-lg:hidden" src={fold3image1} alt="male-worker-blue-uniform-outdoors-with-solar-batteries-sunny-day" />
			</div>
		</div>
	)
}