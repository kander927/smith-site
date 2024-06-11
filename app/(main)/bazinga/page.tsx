"use client";

import React from "react";

const Page = () => {
  return (
    <div className="relative w-screen h-screen bg-slate-900 [mask-image:radial-gradient(transparent,white)]">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none"></div>
      <div className="relative flex items-center justify-center w-full h-full z-20">
        <h1 className="text-white z-20">bazinga</h1>
      </div>
    </div>
  );
};

export default Page;
