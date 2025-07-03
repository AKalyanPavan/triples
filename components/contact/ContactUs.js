// contact us page
import { Header } from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import FormSection from "./FormSection.js"

export default function ContactUs() {
	return(
		<>
			<div className="bg-[#ffffff] top-[0px] sticky z-[3]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans']">
					<Header />
				</div>
			</div>
			<div>
				<div className="bgcontactus">
					<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans'] h-[560px] pt-[100px]">
						<HeadingMultiColour customStyle="max-w-[630px] sm:text-[48px] text-[32px] font-semibold" textLeft="Get in Touch " colorRight="#ffffff" textRight="with Triples Energy" />
						<div className="font-semibold text-[#ffffff] mt-[20px] text-[20px]">
							Let’s Talk About Your Solar Journey
						</div>
					</div>
				</div>
				<FormSection />
			</div>
			<Footer />
		</>
	)
}