"use client";

import { useState } from 'react';
import Image from "next/image";
import { ShiningText } from "@/components/ui/shining-text"
import { Header } from "@/components/Header.js"
import BlogGrid from "./BlogGrid.js"
import Footer from "@/components/Footer.js"
import grid from "@/images/grid.png"
import technician from "@/images/technician.png"
import HeadingMultiColour from "@/components/HeadingMultiColour.js"
import { whyReadOurBlogs } from './Variables.js';

export default function Blog() {

	const [showAllBlogs, setShowAllBlogs] = useState(false);

	return(
		<>
			<Header />
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] my-[100px]">
				<ShiningText customStyle="sm:text-[48px] text-[36px] font-medium" textLeft={"Our "} textRight={"Blogs"} />
				<div className="font-[Exo] font-semibold text-[#24231D] uppercase tracking-[2.4px] my-[20px]">
					Solar Insights: Blogs & Success Stories
				</div>
				<BlogGrid showAllBlogs={showAllBlogs} />
				{!showAllBlogs && (
					<div className="flex items-center justify-center gap-[50px] mt-[50px]">
						<div className="relative mt-[50px] w-max max-lg:hidden">
							<Image className="absolute z-[-1]" src={grid} alt="grid" />
							<div className="ml-[100px] bg-[#1E62AF] rounded-t-[100px] w-fit px-[50px]">
								<Image className="w-[250px]" src={technician} alt="technician" />
							</div>
						</div>
						{/* Why Read Our Blogs Section */}
						<div>
							<HeadingMultiColour customStyle="sm:text-[48px] text-[32px]" textLeft="Why Read " textRight="Our Blogs?" />
							<div className="flex flex-col gap-[30px] mt-[20px]">
								{whyReadOurBlogs.map((item, index) => (
									<div className="flex items-center gap-[20px]" key={index}>
										<Image src={item.imageUrl} alt={item.alt} />
										<span>{item.title}</span>
									</div>
								))}
							</div>
							{/*<div className="bg-[#E6A424] w-fit flex items-center py-[15px] px-[50px] max-w-[350px] cursor-pointer sm:text-[18px] font-medium mt-[30px] rounded-l-full rounded-r-full">
								<span className="text-[#ffffff] ml-[10px] font-semibold">
									<span className="leading-[30px] uppercase">Start Reading and Get Inspired to Go Solar!</span>
								</span>
							</div>*/}
							<div className="bg-[#E6A424] w-fit flex items-center py-[10px] px-[30px] cursor-pointer sm:text-[18px] font-medium mt-[30px] rounded-l-full rounded-r-full" onClick={() => setShowAllBlogs(true)} >
								<span className="text-[#ffffff] ml-[10px] font-semibold">
									<span className="">Read More Blogs</span>
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</>
	)
}