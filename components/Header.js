import Image from "next/image";
import logo from '@/images/logo.png';
import phone from '@/images/phone.svg';

export default function Header() {
	return(
		<div className="py-[20px] bg-[#ffffff] flex justify-between items-center top-[0px] sticky">
			<Image src={logo} className="sm:w-[200px] w-[150px] sm:h-[100px] h-[75px]" alt="Triples Logo" />
			<a href="tel:+91 8778899100" id="callUsNowButton">
				<div className="call-us-button bg-[#E6A424] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium">
					<Image src={phone} alt="Phone" />
					<span className="text-[#ffffff] ml-[10px] font-semibold">
						<span>Call Us</span>
						<span className="max-[370px]:hidden"> Now</span>
					</span>
				</div>
			</a>
		</div>
	)
}