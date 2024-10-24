import { memePics } from '../../constants';
import Heading from '../../ui/Heading';
import Subheading from '../../ui/Subheading';

const Memes = () => {
  return (
    <section id="memes" className="px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Heading primary="memes" />
        <Subheading>
          Here are some of our top community memes.{' '}
          <a
            href=""
            className="hover:underline-purple-500 font-bold decoration-cyan-500 hover:underline"
          >
            Tweet
          </a>{' '}
          us yours for a chance to be featured here.
        </Subheading>
        <div className="mt-6 grid select-none gap-4 sm:grid-cols-2 md:grid-cols-3">
          {memePics.map(({ img, alt }, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl"
            >
              <img
                src={img}
                className="w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                alt={alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memes;
