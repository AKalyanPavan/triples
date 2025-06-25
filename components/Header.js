import logo from '@/images/logo.png';

import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1"

const demoData = {
  logo: {
    url: "/",
    src: logo,
    alt: "blocks for shadcn/ui",
    title: "",
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/aboutus",
    },
    {
      title: "Product",
      url: "/product",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Contact",
      url: "/contactus",
    },
  ],
  mobileExtraLinks: [
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
};

function Header() {
  return (
    <div className="bg-[#ffffff] top-[0px] sticky z-[5]">
      <Navbar1 {...demoData} />
    </div>
  )
}

export { Header };