import { Header } from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import Fold1 from "./Fold1.js"
import Fold2 from "./Fold2.js"
import Fold3 from "./Fold3.js"
import Fold4 from "./Fold4.js"
import Fold5 from "./Fold5.js"
import Fold6 from "./Fold6.js"
import Fold7 from "./Fold7.js"
import Fold8 from "./Fold8.js"
import Fold9 from "./Fold9.js"

export default function CommercialLandingPage3() {
	return(
		<div className="font-['Open_Sans']">
			<Header isLandingPage={true} />
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<Fold1 />
				<Fold2 />
				<Fold3 />
			</div>
			<div className="bg-gradient-to-t from-[#E6A4240D] to-[#1E62AF1A]">
				<Fold4 />
			</div>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<Fold5 />
				<Fold6 />
				<Fold7 />
			</div>
			<div className="bg-[linear-gradient(145deg,#1E62AF0D,#E6A4240D)] py-[50px] sm:px-[50px] px-[20px]">
				<Fold8 />
			</div>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<Fold9 />
			</div>
			<Footer />
		</div>
	)
}