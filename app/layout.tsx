import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IconHome, IconUser, IconMessage, IconImageInPicture, IconAlien, IconVideo } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });



const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-white" />,
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <IconImageInPicture className="h-4 w-4 text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (
      <IconMessage className="h-4 w-4 text-white" />
    ),
  },
  {
    name: "Fart",
    link: "/fart",
    icon: <IconAlien className="h-4 w-4 text-white" />
  },
  // {
  //   name: "Click Me!",
  //   link: "/youngsheldon",
  //   icon: <IconVideo className="h-4 w-4 text-white" />
  // },
];



export const metadata: Metadata = {
  title: "soapreal",
  description: "made by 5skn",
  openGraph: {
    title: "soapreal",
    description: "made by 5skn",
    images: [
      {
        url: "/smithpfp.png", // Replace with the path to your image
        width: 256, // Specify the width of the image
        height: 256, // Specify the height of the image
        alt: "Soapreal Logo", // Alt text for the image
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <a href="/" className="absolute top-10 left-10 z-50">
            <Image src="/smithpfp.png" alt="Logo" width={100} height={100} className="rounded-xl z-[10]" />
          </a>
          <FloatingNav navItems={navItems} />
          {children}
        </div>
      </body>
    </html>
  );
}


