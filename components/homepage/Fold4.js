import Image from "next/image"
import { BackgroundPaths } from "@/components/ui/background-paths"

import fold4image1 from "@/images/home/fold4/fold4image1.png"

export default function Fold4() {
	return(
		<div className="mt-[100px] flex gap-[50px] justify-center">
			<Image className="max-lg:hidden rounded-[10px]" src={fold4image1} alt="solar-energy-generated-farm" />
			<BackgroundPaths title="Join Us in the Green Revolution" />
		</div>
	)
}