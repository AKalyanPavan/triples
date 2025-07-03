import Image from "next/image";

import phone from "@/images/footer/phone.svg"
import mail from "@/images/footer/mail.svg"
import location from "@/images/footer/location.svg"
import FormComponent from "./FormComponent.js"

export default function FormSection() {
	return(
		<div className="max-lg:max-w-[90%] max-w-[1000px] flex max-lg:flex-col lg:mt-[-10%] md:mt-[-20%] mt-[-30%] mb-[100px] justify-center mx-auto">
			<div className="bg-[#ffffff] lg:w-[50%] pt-[20px] px-[20px] shadow-[1px_1px_20px_30px_rgba(0,0,0,0.05)]">
				<FormComponent />
			</div>
			<div className="bg-[#73AAE7] text-white lg:w-[50%] pt-[50px] pl-[50px] shadow-[1px_1px_20px_30px_rgba(0,0,0,0.05)]">
				<div className="flex flex-col gap-[24px] sm:w-[300px] max-md:col-start-2 max-md:ml-[-20px]">
					<a href="tel:+91 7418059444">
						<div className="flex items-start gap-[20px]">
							<Image className="w-[20px] h-[20px]" src={phone} alt="Phone" />
							<span>+91 74180 59444</span>
						</div>
					</a>
					<a href="mailto: salescbe@triplesev.com">
						<div className="flex items-start gap-[20px]">
							<Image className="w-[20px] h-[20px]" src={mail} alt="Mail" />
							<span>salescbe@triplesev.com</span>
						</div>
					</a>
					<a href="mailto: salescbe@triplesev.com">
						<div className="flex items-start gap-[20px]">
							<Image className="w-[20px] h-[20px]" src={location} alt="Location" />
							<span>No.149, Avinashi Road, Hopes College, Peelamedu post, CBE - 641 004</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}