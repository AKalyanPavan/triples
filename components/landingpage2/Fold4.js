import Image from 'next/image'
import doubleQuote from "@/images/landingpage2/double-quote.svg"
import { fold2 } from "./Variables.js"

export default function Fold4() {
	return(
		<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-[100px]">
			<div className="mt-[20px]">
				<div className="quote-box bg-white max-w-[750px] mx-auto rounded-[10px] px-10 pt-10 pb-20 text-center">
					<Image className="mx-auto" src={doubleQuote} alt="Double Quotes" />
					<div className="text-[#757575] my-[30px] sm:text-[25px] text-[20px]">
						We saved nearly ₹50 lakhs in electricity bills within 2 years. The system has already paid for itself
					</div>
					<div className="text-[18px] text-[#232434] py-10 font-semibold">
						Satisfied Customer
					</div>
				</div>
				<div className="text-[#757575] sm:text-[25px] text-[20px] text-center max-w-[650px] mx-auto py-20">
					Run operations on solar, save up to ₹10 lakhs annually – zero investment PPA available.
				</div>
			</div>
		</div>
	)
}