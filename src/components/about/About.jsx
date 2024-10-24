import { Canvas } from '@react-three/fiber';
import Windu from './Windu';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { aboutInfo } from '../../constants';
import AboutCard from './AboutCard';
import Heading from '../../ui/Heading';
import Subheading from '../../ui/Subheading';
import { PiCopyLight, PiCheckLight } from 'react-icons/pi';
import { useState } from 'react';
import Button from '../../ui/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    const address = 'GFRsYwgJMoKDYZngNqy1uV4CFxcPnJgS4fh9KEVgpump';
    navigator.clipboard.writeText(address);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2500);
  };

  return (
    <section id="about" className="px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Heading primary="about" />
        <Subheading>
          He wuz finna launch on May the Fourth, but Windu&apos;s are always
          late.
        </Subheading>
        <div className="mt-6 grid select-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
            {aboutInfo.slice(0, 2).map((info, i) => (
              <AboutCard
                key={i}
                title={info.title}
                description={info.description}
                img={info.img}
                alt={info.alt}
              />
            ))}
          </div>
          <div className="hidden cursor-grab lg:col-span-1 lg:flex">
            <Canvas>
              <ambientLight intensity={4} />
              <directionalLight position={[0, 0, 10]} intensity={1} />
              <Windu />
              <OrbitControls enablePan={false} enableZoom={false} />
              <PerspectiveCamera makeDefault position={[-7, 3, 0]} />
            </Canvas>
          </div>
          <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
            {aboutInfo.slice(2).map((info, i) => (
              <AboutCard
                key={i}
                title={info.title}
                description={info.description}
                img={info.img}
                alt={info.alt}
              />
            ))}
          </div>
        </div>
        <hr className="my-12 border-slate-700" />
        <div className="flex select-none flex-col items-center justify-center gap-4 md:flex-row">
          <Button>twitter</Button>
          <Button>telegram</Button>
        </div>
        <div className="mt-4">
          <button
            className="group group mx-auto flex flex-col items-center gap-2 rounded-2xl sm:flex-row"
            onClick={handleCopy}
          >
            {!hasCopied ? (
              <PiCopyLight className="animate-pulse text-3xl text-purple-500 sm:text-4xl md:text-5xl lg:text-6xl" />
            ) : (
              <PiCheckLight className="text-3xl text-emerald-400 sm:text-4xl md:text-5xl lg:text-6xl" />
            )}
            <span className="duration0-500 text-xs font-thin text-slate-100 transition-colors ease-out group-hover:text-purple-400 sm:text-base sm:font-medium md:text-lg lg:text-xl xl:text-3xl">
              GFRsYwgJMoKDYZngNqy1uV4CFxcPnJgS4fh9KEVgpump
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
