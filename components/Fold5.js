import { ShiningText } from "@/components/ui/shining-text"
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

export default function Fold5() {
	const testimonials = [
	  {
	    author: {
	      name: "Rajesh Kumar",
	      handle: "Homeowner, Coimbatore",
	      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
	    },
	    text: "I was unsure about switching to solar, but Triples Energy made it easy. They explained everything from government subsidies to installation. Now, I'm saving up to ₹45,000 on my electricity bills every year! The 25-year warranty gives me peace of mind. Highly recommend them!",
	    href: ""
	  },
	  {
	    author: {
	      name: "Kavitha Ramesh",
	      handle: "Business Owner, Erode",
	      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
	    },
	    text: "As a small business owner, my electricity costs were high. After installing a solar system with Triples Energy, my monthly bills have dropped by over 80%. Their team was quick and professional, and the installation was done in just 3 weeks. I'm thrilled with the savings and eco-friendly benefits!",
	    href: ""
	  },
	  {
	    author: {
	      name: "Dr. Shankar, MD",
	      handle: "Hospital Owner, Tirupur",
	      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
	    },
	    text: "Energy consumption was a big concern for our hospital. Triples Energy helped us install a high-efficiency solar system. We've saved a lot on energy, and the system has worked better than expected. Their team made the installation process smooth, and now we're contributing to a greener future!",
	    href: ""
	  },
	  {
	    author: {
	      name: "Vinoth Suresh",
	      handle: "Resident, Madurai",
	      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
	    },
	    text: "The 0% EMI plan made it affordable for me to switch to solar. Thanks to Triples Energy, I'm saving money and helping the environment. Their customer service was excellent, and the installation was quick. Solar energy is definitely the way to go!",
	    href: ""
	  },
	  {
	    author: {
	      name: "Madhavi and Rajan",
	      handle: "Resident, Madurai",
	      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
	    },
	    text: "As farmers, we always relied on the sun, but now with our solar system from Triples Energy, we rely on it even more. Our electricity bills have dropped a lot, and the option to sell back excess energy has been great. The process was simple and efficient, and we're happy we made this choice.",
	    href: ""
	  },
	  {
	    author: {
	      name: "Subramaniam",
	      handle: "Entrepreneur, Salem",
	      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
	    },
	    text: "Switching to solar for our office was one of the best decisions we've made. Triples Energy helped with the rooftop installation, and the results have been amazing. Our energy bills have dropped by 85%, and the system works perfectly. The government subsidies and EMI plans made the switch affordable.",
	    href: ""
	  },
	]
	return(
		<div className="my-[100px]">
			<ShiningText customStyle="sm:text-[48px] text-[36px] text-center font-medium" textLeft={"Customer "} textRight={"Testimonials"} />
			<TestimonialsSection
		      title="Trusted by developers worldwide"
		      description="Join thousands of developers who are already building the future with our AI platform"
		      testimonials={testimonials}
		    />
		</div>
	)
}