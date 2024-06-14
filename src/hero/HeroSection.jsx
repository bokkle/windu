import Starfield from 'react-starfield';
import Headline from './Headline';
import HeroImg from './HeroImg';
import ScrollIcon from './ScrollIcon';

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full max-w-screen-2xl border border-red-400">
      <div
        className="flex min-h-screen w-full flex-col items-center justify-around 
        border pt-[100px]"
      >
        <Headline />
        <HeroImg />
        <ScrollIcon />
      </div>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        className="z-[-1]"
      />
    </section>
  );
};

export default HeroSection;
