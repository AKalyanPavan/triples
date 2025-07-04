import Image from 'next/image'
import doubleQuote from "@/images/commercial-landing-page3/double-quote.svg"

export default function Fold4() {
	return(
		<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-[100px]">
			<div className="mt-[20px]">
				<div className="quote-box bg-white max-w-[750px] mx-auto rounded-[10px] px-10 pt-10 pb-20 text-center">
					<Image className="mx-auto" src={doubleQuote} alt="Double Quotes" />
					<div className="text-[#757575] my-[30px] sm:text-[25px] text-[20px]">
						We immediately reduced our energy expenses while improving the building’s green credentials.
					</div>
					<div className="text-[18px] text-[#232434] py-10 font-semibold">
						A Satisfied Property Owner
					</div>
				</div>
				<div className="text-[#757575] sm:text-[25px] text-[20px] text-center max-w-[800px] mx-auto py-20">
					No upfront cost. We started saving from day one, boosting our EBITDA
				</div>
			</div>
		</div>
	)
}