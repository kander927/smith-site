const NotFound = () => {
  return (
    <>
      <div className="min-h-screen relative w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none z-0"></div>

        <div className="relative flex flex-col place-items-center justify-center w-full h-screen z-10 ">
          <h1 className="text-center text-6xl text-white relative z-10">
            Page Not found
          </h1>
          <h2 className="text-gradient text-center text-5xl relative z-10">
            404
          </h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
