import Heading from '../../ui/Heading';
import winduGibs from '../../assets/winduGibMeDat.png';
import winduGif from '../../assets/winduGif.gif';
import { buyButtons } from '../../constants';
import { PiCopyLight, PiCheckLight } from 'react-icons/pi';
import { useState } from 'react';
import Subheading from '../../ui/Subheading';
import Meteors from '../../ui/Meteors';
import { ca } from '../../constants';

const Buy = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    const address = ca;
    navigator.clipboard.writeText(address);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2500);
  };

  return (
    <section id="buy" className="px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Heading primary="buy" />
        <Subheading>No nigfolio is complete without a Jedi Master.</Subheading>
        <div className="mt-6 grid md:grid-cols-2">
          <div className="rounded-xl bg-gradient-to-b from-cyan-400 to-purple-500 p-1">
            <div className="grid h-full grid-cols-2 gap-4 rounded-lg bg-slate-800 p-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {buyButtons.map((element, i) => (
                <button
                  key={i}
                  className={`flex min-h-28 select-none flex-col justify-center overflow-hidden rounded-lg border border-slate-700 transition-colors duration-500 ease-out hover:border-purple-500 ${i > 3 && 'col-span-2'} ${i === 4 && 'bg-slate-950'} group relative`}
                >
                  {i === 4 && <Meteors />}
                  {i < 4 && (
                    <img
                      src={element.img}
                      className="w-full"
                      alt={element.alt}
                    />
                  )}
                  <span
                    className={`mx-auto text-sm capitalize text-slate-100 md:text-lg ${i === 4 && 'font-mono !text-2xl font-semibold sm:!text-3xl'} transition-colors duration-500 ease-out group-hover:text-purple-500`}
                  >
                    {element.title}
                  </span>
                </button>
              ))}
              <div
                className="group col-span-2 flex cursor-pointer place-content-center items-center gap-2 sm:col-span-3 md:col-span-2 lg:col-span-3"
                onClick={handleCopy}
              >
                {!hasCopied ? (
                  <PiCopyLight className="animate-pulse text-4xl text-purple-500" />
                ) : (
                  <PiCheckLight className="text-4xl text-emerald-400" />
                )}

                <span className="text-slate-100 sm:hidden md:block lg:hidden">
                  Copy Contract Address
                </span>
                <span className="hidden font-thin text-slate-100 transition-colors duration-500 ease-out group-hover:text-purple-400 sm:block md:hidden lg:block xl:text-lg">
                  {ca}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center md:mt-0 ">
            <img
              src={winduGif}
              className="select-none"
              alt="Gib me dat for free"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
