const AboutCard = ({ title, description, img, alt }) => {
  return (
    <div className="group flex flex-col rounded-xl border border-slate-700 bg-slate-800 px-6 pt-6 transition-colors duration-500 ease-out hover:border-purple-500">
      <img
        src={img}
        className="h-full w-full select-none rounded-lg object-cover"
        alt={alt}
      />
      <div className="my-2.5">
        <h3 className="text-xl font-starJedi capitalize text-slate-100 transition-colors duration-500 ease-out group-hover:text-purple-500">
          {title}
        </h3>
        <p className=" text-lg capitalize text-slate-300 ">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
