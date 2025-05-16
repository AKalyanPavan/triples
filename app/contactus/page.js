// contact us page
import Header from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import contactUsImage from "@/images/contact-us.png"

export default function Home() {
	return(
		<>
			<div className="bg-[#ffffff] top-[0px] sticky z-[3]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans']">
					<Header />
				</div>
			</div>
			<div className="bgcontactus relative">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans'] min-h-[560px] pt-[100px]">
					<HeadingMultiColour customStyle="sm:text-[48px] text-[32px] font-semibold" textLeft="Get in Touch " colorRight="#ffffff" textRight="with Triples Energy" />
					<div className="font-semibold text-[#ffffff]">
						Let’s Talk About Your Solar Journey
					</div>
				</div>
			</div>
			<div className="bg-[#E6A4240D]">
				<div className="bgfooter max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans']">
					<Footer />
				</div>
			</div>
		</>
	)
}