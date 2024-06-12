import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  IconHome,
  IconUser,
  IconMessage,
  IconImageInPicture,
  IconAlien,
  IconVideo,
  IconAd2,
  IconQuestionMark,
  IconAtom,
  IconAtom2,
  IconAtom2Filled,
  IconAtomOff,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { QueryProvider } from "@/providers/QueryClient";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiImagedotsc, SiImagej } from "react-icons/si";
import ImageIcon from '@mui/icons-material/Image';
import { HomeIcon, PhotographIcon, ChatIcon, QuestionMarkCircleIcon, XIcon } from '@heroicons/react/outline';

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-white" />,
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <PhotographIcon className="h-4 w-4 text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
  {
    name: 'About',
    link: "/about",
    icon: <IconQuestionMark className="h-4 w-4 text-white"/>
  },
  {
    name: "Bazinga",
    link: "/bazinga",
    icon: <IconAtom className="h-4 w-4 text-white" />,
  },
 
];

export const metadata: Metadata = {
  title: "soapreal_",
  description: "made by 5skn",
  openGraph: {
    images: [
      {
        url: "https://smith-eta.vercel.app/smithpfp.png",
        height: 64,
        width: 64,
        alt: "soapreal_ image",
      },
    ],
  },
  metadataBase: new URL("https://smith-eta.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <a href="/" className="scale absolute top-10 left-10 z-50">
              <Image
                src="/smithpfp.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-xl z-[10]"
              />
            </a>
            <FloatingNav navItems={navItems} />
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </QueryProvider>
  );
}
