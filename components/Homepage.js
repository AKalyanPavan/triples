import Header from "./Header.js"
import Fold1 from "./Fold1.js"
import Fold2 from "./Fold2.js"
import Fold3 from "./Fold3.js"
import Fold4 from "./Fold4.js"
import Fold5 from "./Fold5.js"
import Footer from "./Footer.js"

export default function Homepage() {
	return(
		<>
			<div className="bg-[#ffffff] top-[0px] sticky z-[3]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans']">
					<Header />
				</div>
			</div>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans']">
				<Fold1 />
				<Fold2 />
				<Fold3 />
				<Fold4 />
				<Fold5 />
			</div>
			<div className="bg-[#E6A4240D]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Open_Sans']">
					<Footer />
				</div>
			</div>
		</>
	)
}