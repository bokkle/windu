const Button = ({ children }) => {
  return (
    <button className="group relative w-full max-w-[300px] rounded-2xl border-2 border-purple-500 bg-gradient-to-b from-slate-800 to-slate-950 p-4 font-starJedi text-xl text-slate-100">
      <div
        className="absolute left-1/3 top-0 h-1 w-2/5 rounded-full bg-purple-500 opacity-0 transition-all duration-500 ease-in group-hover:left-[10px] group-hover:opacity-100"
        style={{ boxShadow: '0 0 10px violet' }}
      />
      {children}
      <div
        className="absolute bottom-0 right-1/3 h-1 w-2/5 rounded-full bg-purple-500 opacity-0 transition-all duration-500 ease-in group-hover:right-[10px] group-hover:opacity-100"
        style={{ boxShadow: '0 0 10px violet' }}
      />
    </button>
  );
};

export default Button;
