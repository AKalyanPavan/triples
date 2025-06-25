import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { keyFeatures, benefits, exclusiveOffers } from "./Variables.js";

export function ProductCard() {
  const data = [
    {
      title: "",
      content: (
        <div className="">
          <p className="text-[#24231D] dark:text-neutral-200 text-[18px] md:text-[20px] font-normal mb-8">
            Key Features:
          </p>
          <div className="flex flex-col gap-[20px] pl-[20px]">
            {keyFeatures.map((keyFeature, index) => (
              <div className="flex items-start gap-[20px]" key={index}>
                <Image src={keyFeature.imageUrl} alt={keyFeature.alt} />
                <div>
                  <span className="text-[#878680]">{keyFeature.title}</span>
                  <a>
                    <span className="text-[#1E62AF]">{keyFeature.linkText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "",
      content: (
        <div className="">
          <p className="text-[#24231D] dark:text-neutral-200 text-[18px] md:text-[20px] font-normal mb-8">
            Benefits:
          </p>
          <div className="flex flex-col gap-[20px] pl-[20px]">
            {benefits.map((benefit, index) => (
              <div className="flex items-start gap-[20px]" key={index}>
                <Image src={benefit.imageUrl} alt={benefit.alt} />
                <div>
                  <span className="text-[#878680]">{benefit.title}</span>
                  <a>
                    <span className="text-[#1E62AF]">{benefit.linkText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "",
      content: (
        <div className="">
          <p className="text-[#24231D] dark:text-neutral-200 text-[18px] md:text-[20px] font-normal mb-8">
            Exclusive Offers:
          </p>
          <div className="flex flex-col gap-[20px] pl-[20px]">
            {exclusiveOffers.map((exclusiveOffer, index) => (
              <div className="flex items-start gap-[20px]" key={index}>
                <Image src={exclusiveOffer.imageUrl} alt={exclusiveOffer.alt} />
                <div>
                  <span className="text-[#878680]">{exclusiveOffer.title}</span>
                  <a>
                    <span className="text-[#1E62AF]">{exclusiveOffer.linkText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="">
        <Timeline data={data} />
      </div>
    </div>
  );
}
