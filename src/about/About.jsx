const About = () => {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center border">
      <h1 className="font-starJedi text-2xl tracking-wide text-white">about</h1>
      <div
        className="relative flex h-[100px] w-full max-w-screen items-center 
      justify-center overflow-hidden border rounded-xl lg:w-1/2"
      >
        <div
          className="animate-spin-slow absolute h-[800px] w-[800px] bg-gradient-to-br 
        from-yellow-400 to-green-600"
        ></div>
        <h1 className="absolute top-1.5 bottom-1.5 left-1.5 right-1.5 rounded-lg bg-slate-900">
          CA: 01010101010101010101
        </h1>
      </div>
      <div className="">buy links</div>
    </div>
  );
};

export default About;
