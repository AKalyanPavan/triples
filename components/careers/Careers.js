import { Header } from "@/components/Header.js"
import CareerForm from "@/components/careers/CareerForm.js"
import Footer from "@/components/Footer.js"

export default function Careers() {
	return(
		<div className="font-['Open_Sans']">
			<Header />
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
				<CareerForm />
			</div>
			<Footer />
		</div>
	)
}