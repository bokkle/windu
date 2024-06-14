import winduGif from '../assets/windu.gif';

const HeroImg = () => {
  return (
    <div
      className="z-20 rounded-xl bg-gradient-to-br 
        from-purple-500 via-blue-400 to-purple-400 p-1"
    >
      <img
        loading="eager"
        src={winduGif}
        className="rounded-lg"
        alt="windu the memeslayer"
      />
    </div>
  );
};

export default HeroImg;
