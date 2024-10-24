const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={'meteor' + idx}
          className={`animate-meteor-effect pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] ${className}`}
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
          }}
        >
          <span
            style={{
              content: "''",
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '1px',
              backgroundImage:
                'linear-gradient(to right, #c4c8ce, transparent)',
            }}
          />
        </span>
      ))}
    </>
  );
};

export default Meteors;
