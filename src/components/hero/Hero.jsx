import winduVideo from '../../assets/windu.mp4';
import Button from '../../ui/Button';
import Starfield from '../../ui/Starfield';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen">
      <Starfield />
      <div className="mx-auto flex h-full min-h-screen w-full max-w-7xl flex-col justify-evenly pt-24">
        <div className="">
          <h1
            className="select-none text-center font-starJedi  
          text-3xl tracking-wide text-white sm:text-5xl lg:text-6xl lg:leading-snug xl:text-7xl"
          >
            a long time ago <br /> in a galaxy far, far away...
            <br />
            he <span className="headlineGlow text-[#a952ff]">windu nuffin</span>
          </h1>
          <div className="mt-10 flex select-none flex-col items-center justify-center gap-4 md:flex-row">
            <Button>buy now</Button>
            <Button>learn more</Button>
          </div>
        </div>
        <div
          className="z-20 mx-auto mt-10 max-w-fit 
        rounded-xl bg-gradient-to-b from-blue-400 to-purple-500 p-1"
        >
          <video
            className="h-full w-full max-w-4xl rounded-lg object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src={winduVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
