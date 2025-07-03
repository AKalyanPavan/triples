import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import { fold2 } from "./Variables.js"

export default function Fold2() {
	return(
		<div className="">
			<HeadingMultiColour customStyle="lg:text-[48px] md:text-[36px] text-[24px] font-semibold text-center" textLeft={"Why Choose "} textRight={"Tata Power Solar?"} />
			<div className="mt-[20px]">
				<FeaturesSectionWithHoverEffects features={fold2} customClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl" />
			</div>
		</div>
	)
}