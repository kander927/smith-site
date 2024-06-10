import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IconHome, IconUser, IconMessage, IconImageInPicture, IconAlien, IconVideo, IconAd2 } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
import { QueryProvider } from "@/providers/QueryClient";

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
  //   name: 'sigma',
  //   link: "/",
  //   icon: <IconAd2 className="h-4 w-4 text-white"/>
  // },
];



export const metadata: Metadata = {
  title: "soapreal_",
  description: "made by 5skn",
  openGraph: {
    images: [
      {
        url: 'https://smith-eta.vercel.app/smithpfp.png',
        height: 64,
        width: 64,
        alt: "soapreal_ image",
      }
    ]
  },
  metadataBase: new URL('https://smith-eta.vercel.app')
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
            <FloatingNav navItems={navItems} />
            {children}
          </div>
          <Analytics />
        </body>
      </html>
    </QueryProvider>
  );
}


