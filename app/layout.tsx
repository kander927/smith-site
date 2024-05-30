import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IconHome, IconUser, IconMessage, IconImageInPicture } from "@tabler/icons-react";
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
];

export const metadata: Metadata = {
  title: "soapreal",
  description: "made by 5skn",
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
          <div style={{ position: 'absolute', top: '40px', left: '40px' }}>
            <Image src="/smithpfp.png" alt="Logo" width={100} height={100} className="rounded-xl" />
          </div>
          <FloatingNav navItems={navItems} />
          {children}
        </div>
      </body>
    </html>
  );
}
