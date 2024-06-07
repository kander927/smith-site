"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-[6rem]">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "3 idiots try to hunt ghosts",
    description:"",
    link: "https://www.youtube.com/embed/tkzcvk2FVDo",
  },
  {
    title: "trying to spread democracy across the stars",
    description:"",
    link: "https://www.youtube.com/embed/bSM6IUrcFnU",
  },
  {
    title: "",
    description:"",
    link: "https://www.youtube.com/embed/Kbn5-x7DgtI",
  },
  {
    title: "",
    description:"",
    link: "https://www.youtube.com/embed/xprhguH0yCg",
  },
  {
    title: "",
    description:"",
    link: "https://www.youtube.com/embed/Me5hqxdrQmc",
  },
  {
    title: "super epic gaming",
    description: "epic gaming",
    link: "https://www.5skn.xyz"
  }
  
];

export default Page