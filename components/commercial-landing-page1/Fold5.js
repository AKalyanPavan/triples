import Image from "next/image"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import { fold5 } from "./Variables.js"

export default function Fold5() {
	return(
		<div className="my-20">
			<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] font-semibold text-center" textLeft={"How It Works – "} textRight={"Simple & Stress-Free"} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
		        {fold5.map((item, index) => (
					<div key={index} 
					className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 text-center`}>
						<div className="mb-4">
						  <Image 
						    src={item.icon} 
						    alt={`${item.title} icon`}
						    width={200}
						    height={150}
						    className="mx-auto"
						  />
						</div>
						<h3 className="text-[20px] font-medium text-gray-900 mb-3 leading-tight">
						  {item.title}
						</h3>
						<p className="text-sm text-gray-600 leading-relaxed">
						  {item.description}
						</p>
					</div>
		        ))}
		    </div>
		</div>
	)
}