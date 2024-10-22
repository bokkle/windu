import Starfield from 'react-starfield';
import winduGif from '../../assets/windu.gif';
import Button from '../../ui/Button';

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl pt-28 border h-full">
        <div className="flex flex-col items-center md:flex-row">
          <h1
            className="text-center font-starJedi text-3xl  
          tracking-wide text-white lg:text-5xl lg:leading-snug"
          >
            a long time ago <br /> in a galaxy far, far away...
            <br />
            he <span className="headlineGlow text-[#a952ff]">windu nuffin</span>
          </h1>
          <div
            className="z-20 mx-auto mt-10 max-w-fit 
        rounded-xl bg-gradient-to-b from-blue-400 to-purple-500 p-1"
          >
            <img
              loading="eager"
              src={winduGif}
              className="rounded-lg"
              alt="windu the memeslayer"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button>buy now</Button>
          <Button>learn more</Button>
        </div>
      </div>
      {/* <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        className="z-[-1]"
      /> */}
    </section>
  );
};

export default Hero;
