"use client";

import React from "react";

const Page = () => {
  return (
    <div className="relative w-screen h-screen z-0">
      <div className="absolute inset-0 z-0 pointer-events-none elative w-screen h-screen bg-slate-900 [mask-image:radial-gradient(transparent,white)]"></div>
      <div className="relative flex items-center justify-center w-full h-full z-10">
        <h1 className="red-gradient text-3xl text-white z-10">bazinga</h1>
      </div>
    </div>
  );
};

export default Page;
