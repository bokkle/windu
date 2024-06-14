const Navigation = () => {
  return (
    <header className="fixed flex h-[100px] w-full justify-center border-b">
      <div className="flex h-full w-full max-w-7xl justify-between">
        <div className="ml-3 flex items-center border border-pink-700">
          <h1 className="text-2xl font-bold uppercase tracking-wide text-slate-100">
            windu
          </h1>
        </div>
        <div className="mr-3 flex items-center border border-green-500 text-slate-100">
          nav list
        </div>
      </div>
    </header>
  );
};

export default Navigation;
