import Image from "next/image"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import { fold3 } from "./Variables.js"

export default function Fold2() {
	return(
		<div className="mt-[50px] mb-[100px]">
			<HeadingMultiColour customStyle="md:text-[36px] text-[32px] font-semibold text-center" textLeft="Here's Why " textRight="You Should Make the Switch" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
		        {fold3.map((item, index) => (
					<div 
					key={index} 
					className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200`}>
						<div className="mb-4">
						  <Image 
						    src={item.icon} 
						    alt={`${item.title} icon`}
						    width={48}
						    height={48}
						    className="text-orange-500"
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