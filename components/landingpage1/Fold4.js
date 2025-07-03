import Image from "next/image"
import { ShiningText } from "@/components/ui/shining-text"
import fold3image1 from '@/images/home/fold3/fold3image1.png'

import fold4image1 from '@/images/landingpage1/fold4image1.svg'
import fold4image2 from '@/images/landingpage1/fold4image2.svg'
import qrcode from '@/images/landingpage1/qr-code.png'

export default function Fold4() {
	return(
		<div className="flex lg:gap-[50px] justify-center mx-auto my-[100px] items-center">
			<div>
				<ShiningText customStyle="md:text-[36px] text-[32px] font-medium" textLeft={""} textRight={"Ready to Take the Next Step?"} />
				<div className="flex items-center mt-[50px] gap-[10px]">
					<Image src={fold4image1} alt="Location" className="w-[50px]" />
					<div>
						<div className="font-semibold text-[#1E62AF] text-[20px]">
							Visit Us
						</div>
						<div className="">
							SF No. 685/1-A, Molapalayam Road, Vellanai Patti Post, Coimbatore - 641048
						</div>
					</div>
				</div>
				<div className="flex items-center mt-[50px] gap-[10px]">
					<Image src={fold4image2} alt="Contact" className="w-[45px]" />
					<div>
						<div className="font-semibold text-[#1E62AF] text-[20px]">
							Call Us Now
						</div>
						<div className="">
							+91 8220355966 | +91 7418059444
						</div>
					</div>
				</div>
				<div className="mt-[50px] font-semibold text-[#1E62AF] text-[20px]">
					<span>Scan the QR Code to Book Your Consultation!</span>
					<Image src={qrcode} alt="QR Code" className="w-[150px] mt-[20px]" />
				</div>
			</div>
			<div>
				<Image className="w-[530px] rounded-[10px] max-lg:hidden" src={fold3image1} alt="male-worker-blue-uniform-outdoors-with-solar-batteries-sunny-day" />
			</div>
		</div>
	)
}