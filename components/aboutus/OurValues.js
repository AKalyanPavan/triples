"use client";
import Image from "next/image";

import DisplayCards from "@/components/ui/display-cards";
// import { Sparkles } from "lucide-react";
import fold3image1 from "@/images/aboutus/fold3image1.svg";
import fold3image2 from "@/images/aboutus/fold3image2.svg";
import fold3image3 from "@/images/aboutus/fold3image3.svg";


const defaultCards = [
  {
    icon: <Image src={fold3image3} alt="Innovation" />,
    title: "Impact",
    description: "Discover amazing content",
    date: "Just now",
    // iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Image src={fold3image2} alt="Integrity" />,
    title: "Integrity",
    description: "Trending this week",
    date: "2 days ago",
    // iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Image src={fold3image1} alt="Impact" />,
    title: "Innovation",
    description: "Latest updates and features",
    date: "Today",
    // iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

function OurValues() {
  return (
    <div className="flex min-h-[300px] w-full items-center justify-center pt-5 pb-10">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { OurValues };
