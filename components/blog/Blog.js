import { ShiningText } from "@/components/ui/shining-text"
import { Header } from "@/components/Header.js"
import BlogGrid from "./BlogGrid.js"
import Footer from "@/components/Footer.js"

export default function Blog() {
	return(
		<>
			<Header />
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px] ">
				<ShiningText customStyle="sm:text-[48px] text-[36px] font-medium" textLeft={"Our "} textRight={"Blogs"} />
				<div className="font-[Exo] font-semibold text-[#24231D] uppercase tracking-[2.4px] my-[20px]">
					Solar Insights: Blogs & Success Stories
				</div>
				<BlogGrid />
			</div>
			<Footer />
		</>
	)
}