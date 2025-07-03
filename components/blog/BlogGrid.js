import Image from "next/image";
import calendar from '@/images/blog/calendar.svg';
import person from '@/images/blog/person.svg';
import { Button } from "@/components/ui/moving-border";

export default function BlogGrid({ showAllBlogs = false, blogs }) {

	// const blogsToShow = showAllBlogs ? blogs : blogs.slice(0, 6);
	const blogsToShow = blogs;

	const formatDate = (dateString, outputFormat = 'YYYY-MM-DD') => {
	  const parsedDate = parseManually(dateString);
	  if (!parsedDate) return null;
	  
	  const year = parsedDate.getFullYear();
	  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
	  const day = String(parsedDate.getDate()).padStart(2, '0');
	  const hours = String(parsedDate.getHours()).padStart(2, '0');
	  const minutes = String(parsedDate.getMinutes()).padStart(2, '0');
	  
	  switch (outputFormat) {
	    case 'YYYY-MM-DD':
	      return `${year}-${month}-${day}`;
	    case 'DD/MM/YYYY':
	      return `${day}/${month}/${year}`;
	    case 'MM/DD/YYYY':
	      return `${month}/${day}/${year}`;
	    case 'full':
	      return `${year}-${month}-${day} ${hours}:${minutes}`;
	    default:
	      return parsedDate.toISOString();
	  }
	};

	const parseManually = (dateString) => {
	  try {
	    const [datePart, timePart, meridian] = dateString.split(' ');
	    const [day, month, year] = datePart.split('/').map(Number);
	    const [hours, minutes] = timePart.split(':').map(Number);
	    
	    // Convert to 24-hour format
	    let adjustedHours = hours;
	    if (meridian === 'PM' && hours !== 12) {
	      adjustedHours = hours + 12;
	    } else if (meridian === 'AM' && hours === 12) {
	      adjustedHours = 0;
	    }
	    
	    // Create Date object (month is 0-indexed)
	    return new Date(year, month - 1, day, adjustedHours, minutes);
	  } catch (error) {
	    console.error('Error parsing date:', error);
	    return null;
	  }
	};
	
	return(
		<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-[20px] gap-y-[50px]">
			{blogsToShow.map((blog, index) => (
				<div className="" key={index}>
					<Image className="rounded-[10px] mb-[20px]" src={blog.File_Url ? blog.File_Url : null } width={400} height={300} alt={blog.Title} />
					<div className="flex items-center gap-[30px] text-[#878680] font-semibold">
						<div className="flex items-center gap-[10px]">
							<Image src={calendar} alt="calendar" />
							<span className="">{formatDate(blog.Created_Time)}</span>
						</div>
						<div className="flex items-center gap-[10px]">
							<Image src={person} alt="calendar" />
							<span className="">{blog.Created_User_Name}</span>
						</div>
					</div>
					<div className="text-[#1E62AF] my-[20px] text-[18px] font-semibold w-full">{blog.Title}</div>
					<a target="_blank" href={blog.Slug_Url}>
						<Button
					        borderRadius="1rem"
					        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
						>
							Read More +
						</Button>
					</a>
				</div>
			))}
		</div>
	)
}
