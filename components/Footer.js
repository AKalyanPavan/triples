import Image from "next/image";
import logo from "@/images/logo.png";
import phone from "@/images/footer/phone.svg"
import mail from "@/images/footer/mail.svg"
import location from "@/images/footer/location.svg"

export default function Footer() {
	return(
		<div className="bg-[#E6A4240D]">
			<div className="bgfooter max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<div className="py-[50px]">
					<div className="flex lg:flex-row flex-col gap-[50px] mt-[40px] lg:justify-between items-center">
						<div className="max-lg:mx-auto">
							<Image className="sm:max-w-[200px] max-w-[150px] sm:h-[100px] h-[75px]" src={logo} alt="Triples Logo" />
						</div>
						<div className="grid lg:grid-cols-3 grid-cols-2 md:gap-x-[0px] gap-y-[50px] font-normal text-[14px] justify-items-center">
							<div className="flex flex-col gap-[24px] sm:w-[300px]">
								<span className="text-[#1E62AF] font-bold">Links</span>
								<span>About Us</span>
								<span>Product</span>
								<span>Blog</span>
								<span>Contact</span>
							</div>
							<div className="flex flex-col gap-[24px] sm:w-[300px]">
								<span className="text-[#1E62AF] font-bold">Product</span>
								<span>Residential</span>
								<span>Commercial</span>
							</div>
							<div className="flex flex-col gap-[24px] sm:w-[300px] max-md:col-start-2 max-md:ml-[-20px]">
								<div className="text-[#1E62AF] font-bold">Contact Us</div>
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
				</div>
			</div>
		</div>
	)
}