import logo from '@/images/logo.png';

import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1"

function Header({isLandingPage = false}) {

  const menuItems = !isLandingPage ? [
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
      title: "Careers",
      url: "/careers",
    },
    {
      title: "Contact",
      url: "/contactus",
    },
  ] : [];

  const demoData = {
    logo: {
      url: "/",
      src: logo,
      alt: "blocks for shadcn/ui",
      title: "",
    },
    menu: menuItems,
    mobileExtraLinks: [
    ],
    auth: {
      login: { text: "Log in", url: "/login" },
      signup: { text: "Sign up", url: "/signup" },
    },
  };

  return (
    <div className="bg-[#ffffff] top-[0px] sticky z-[5]">
      <Navbar1 {...demoData} />
    </div>
  )
}

export { Header };