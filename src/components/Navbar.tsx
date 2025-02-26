import { Book, Sunset, Trees, Zap } from "lucide-react";

import { Navbar1 } from "@/components/shadcnblocks-com-navbar1"

const demoData = {
  logo: {
    url: "github.com/laema9",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
  },
  menu: [
    {
      title: "Home",
      url: "home",
    },
    {
      title: "Mes projets",
      url: "#",
      items: [
        {
          title: "Projets Python",
          description: "De multiple beaux petits projets",
          icon: <Book className="size-5 shrink-0" />,
          url: "/python",
        },
        {
          title: "Projets Web Front",
          description: "Blablabla",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/Blablabla",
        },
        {
          title: "Blablabla",
          description: "Blablabla",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/Blablabla3",
        },
        {
          title: "Blablabla2",
          description:
            "Blablabla",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/Blablabla1",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/help",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/contact",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/status",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "/terms",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
};

export default function Navbar() {
  return <Navbar1 {...demoData} />;
}

