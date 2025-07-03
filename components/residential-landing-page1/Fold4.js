import Image from "next/image"
import { ShiningText } from "@/components/ui/shining-text"
import fold4image1 from '@/images/residential-landing-page1/fold4image1.png'

import fold4image2 from '@/images/residential-landing-page1/fold4image2.svg'
import fold4image3 from '@/images/residential-landing-page1/fold4image3.svg'
import qrcode from '@/images/residential-landing-page1/qr-code.png'

export default function Fold4() {
	return(
		<div className="flex lg:gap-[50px] justify-center mx-auto my-[100px] items-center">
			<div>
				<ShiningText customStyle="md:text-[36px] text-[32px] font-medium text-center" textLeft={""} textRight={"Ready to Take the Next Step?"} />
				<div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-[30px] text-center">
					<div className="border border-[#F5EFE4] p-5">
						<Image className="mx-auto" src={fold4image2} alt="Location" />
						<div className="text-[#1E62AF] text-[20px] my-5">
							Visit Us
						</div>
						<div>
							SF No. 685/1-A, Molapalayam Road, Vellanai Patti Post, Coimbatore - 641048
						</div>
					</div>
					<div className="border border-[#F5EFE4] p-5">
						<Image className="mx-auto" src={fold4image3} alt="Location" />
						<div className="text-[#1E62AF] text-[20px] my-5">
							Call Us Now
						</div>
						<div>
							+91 8220355966 
						</div>
						<div>
							 +91 7418059444
						</div>
					</div>
				</div>
				<div className="mt-[50px] font-semibold text-[#1E62AF] text-[24px] text-center">
					<span>Scan the QR Code to Book Your Consultation!</span>
					<Image src={qrcode} alt="QR Code" className="w-[150px] mt-[20px] mx-auto" />
				</div>
			</div>
			<div>
				<Image className="min-w-[400px] rounded-[10px] max-lg:hidden" src={fold4image1} alt="male-worker-blue-uniform-outdoors-with-solar-batteries-sunny-day" />
			</div>
		</div>
	)
}