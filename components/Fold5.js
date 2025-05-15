import { ShiningText } from "@/components/ui/shining-text"
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

import { fold5 } from "./Variables.js"

export default function Fold5() {
	return(
		<div className="mt-[100px] mb-[50px]">
			<ShiningText customStyle="sm:text-[48px] text-[36px] text-center font-medium" textLeft={"Customer "} textRight={"Testimonials"} />
			<TestimonialsSection
		      title="Trusted by developers worldwide"
		      description="Join thousands of developers who are already building the future with our AI platform"
		      testimonials={fold5}
		    />
		</div>
	)
}