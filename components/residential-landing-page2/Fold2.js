import { ShiningText } from "@/components/ui/shining-text"
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { fold2 } from "./Variables.js"

export default function Fold2() {
	return(
		<div className="">
			<ShiningText customStyle="md:text-[36px] text-[32px] text-center font-medium" textLeft={"Why Choose Solar "} textRight={"for Your Business?"} />
			<div className="mt-[20px]">
				<FeaturesSectionWithHoverEffects features={fold2} customClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl" />
			</div>
		</div>
	)
}