const Heading = ({ primary }) => {
  return (
    <h2 className="headlineGlow font-starJedi text-5xl text-purple-500 sm:text-6xl md:text-7xl">
      {primary}
    </h2>
  );
};

export default Heading;
