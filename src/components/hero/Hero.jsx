import Starfield from 'react-starfield';
import winduVideo from '../../assets/windu.mp4';
import Button from '../../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="mx-auto border h-full w-full max-w-7xl pt-24">
        <div className="">
          <h1
            className="select-none text-center font-starJedi  
          text-3xl tracking-wide text-white lg:text-5xl xl:text-7xl lg:leading-snug"
          >
            a long time ago <br /> in a galaxy far, far away...
            <br />
            he <span className="headlineGlow text-[#a952ff]">windu nuffin</span>
          </h1>
          <div className="mt-10 flex select-none flex-col items-center justify-center gap-4 md:flex-row">
            <Button>buy now</Button>
            <Button>learn more</Button>
          </div>
          {/* <div
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
          </div> */}
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
        {/* <div className="mt-10 flex select-none flex-col items-center justify-center gap-4 md:flex-row">
          <Button>buy now</Button>
          <Button>learn more</Button>
        </div> */}
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
