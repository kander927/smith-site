"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Metadata } from "next";



const Page = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <head><title>soapreal_ | Home</title></head>
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-gradient relative z-20">
          Welcome
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={1000}
            className="w-full h-full"
            particleColor="#FFFFFF"
            fullScreen={false}
          />
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_10%,white)]"></div>
        </div>
        <p className="text-rev-gradient text-[20px] text-center mt-2  relative z-20">
          This is a site for soapreal_. Made by 5skn for my CS final project
        </p>
      </div>
    </div>
  );
}

export default Page
