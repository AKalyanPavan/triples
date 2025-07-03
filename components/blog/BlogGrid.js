import { blogs } from './Variables.js';
import Image from "next/image";
import calendar from '@/images/blog/calendar.svg';
import person from '@/images/blog/person.svg';
import { Button } from "@/components/ui/moving-border";

export default function BlogGrid({ showAllBlogs = false }) {

	const blogsToShow = showAllBlogs ? blogs : blogs.slice(0, 6);
	
	return(
		<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-[20px] gap-y-[50px]">
			{blogsToShow.map((blog, index) => (
				<div className="max-w-[400px] w-fit" key={index}>
					<Image className="rounded-[10px] mb-[20px]" src={blog.imageUrl} alt={blog.alt} />
					<div className="flex items-center gap-[30px] text-[#878680] font-semibold">
						<div className="flex items-center gap-[10px]">
							<Image src={calendar} alt="calendar" />
							<span className="">{blog.date}</span>
						</div>
						<div className="flex items-center gap-[10px]">
							<Image src={person} alt="calendar" />
							<span className="">{blog.user}</span>
						</div>
					</div>
					<div className="text-[#1E62AF] my-[20px] text-[18px] font-semibold">{blog.title}</div>
					<Button
				        borderRadius="1rem"
				        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
					>
						Read More +
					</Button>
				</div>
			))}
		</div>
	)
}
