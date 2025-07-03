import Image from "next/image"
import { cn } from "@/lib/utils";

export function FeaturesSectionWithHoverEffects({features, customClass}) {
  return (
    <div className={`grid ${customClass} relative z-1 py-10 mx-auto justify-items-center`}>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r lg:border-r-[#1e62afa6] py-10 relative group/feature dark:border-neutral-800 w-full",
        (index === 0 || index === 4) && "lg:border-l lg:border-l-[#1e62afa6] dark:border-neutral-800",
        index < 4 && "dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-1 px-10 text-neutral-600 dark:text-neutral-400">
        <Image src={icon} alt={title} />
      </div>
      <div className="text-lg font-bold mb-2 relative z-1 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#1E62AF] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 relative z-1 px-10">
        {description}
      </p>
    </div>
  );
};
