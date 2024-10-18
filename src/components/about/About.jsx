import { Canvas } from '@react-three/fiber';
import Windu from './Windu';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { aboutInfo } from '../../constants';
import AboutCard from './AboutCard';
import Heading from '../../ui/Heading';
import Subheading from '../../ui/Subheading';

const About = () => {
  return (
    <section className="px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Heading primary="about" />
        <Subheading>
          He wuz finna launch on May the Fourth, but Windu&apos;s are always
          late.
        </Subheading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
};

export default About;
