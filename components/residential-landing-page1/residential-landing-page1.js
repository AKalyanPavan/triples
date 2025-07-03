import { Header } from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import Fold1 from "./Fold1.js"
import Fold2 from "./Fold2.js"
import Fold3 from "./Fold3.js"
import Fold4 from "./Fold4.js"
import Fold5 from "./Fold5.js"

export default function ResidentialLandingPage1() {
	return(
		<div className="font-['Open_Sans']">
			<Header isLandingPage={true} />
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<Fold1 />
				<Fold2 />
				<Fold3 />
				<Fold4 />
				<Fold5 />
			</div>
			<Footer />
		</div>
	)
}