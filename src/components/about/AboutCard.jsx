const AboutCard = ({ title, description, img, alt }) => {
  return (
    <div className="group flex flex-col rounded-xl border border-slate-700 bg-slate-800 px-4 pt-4 transition-colors duration-500 ease-out hover:border-purple-500 sm:px-6 sm:pt-6">
      <img
        src={img}
        className="h-full w-full select-none rounded-lg object-cover"
        alt={alt}
      />
      <div className="my-2.5">
        <h3 className="font-starJedi text-lg text-slate-100 transition-colors duration-500 ease-out group-hover:text-purple-500 md:text-xl">
          {title}
        </h3>
        <p className="capitalize text-slate-300 md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
