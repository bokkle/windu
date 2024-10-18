import Heading from '../../ui/Heading';
import winduGibs from '../../assets/winduGibMeDat.png';
import { buyButtons } from '../../constants';
import jupiter from '../../assets/jupiter.svg';
import raydium from '../../assets/raydium.svg';
import pumpfun from '../../assets/pumpfun.svg';
import dexscreener from '../../assets/dexscreener.svg';

const Buy = () => {
  return (
    <section className="px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Heading primary="buy" />
        <div className="mt-6 grid md:grid-cols-2">
          <div className="rounded-xl bg-gradient-to-b from-cyan-400 to-purple-500 p-1">
            <div className="grid h-full grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg bg-slate-800 p-6">
              {buyButtons.map((element, i) => (
                <div
                  key={i}
                  className={`flex justify-center flex-col rounded-lg border border-slate-700 ${i > 3 && 'col-span-2'}`}
                >
                  <img
                    src={element.img}
                    className="w-full"
                    alt={element.alt}
                  />
                  <span className="mx-auto text-sm capitalize text-slate-100 md:text-lg mb-2">
                    {element.title}
                  </span>
                </div>
              ))}
              {/* <div className="rounded-lg border border-purple-500">
                <img src={pumpfun} alt="" />
              </div>
              <div className="rounded-lg border border-purple-500">
                <img src={raydium} alt="" />
              </div>
              <div className="rounded-lg border border-purple-500">
                <img src={jupiter} alt="" />
              </div>
              <div className="col-span-3 rounded-lg border border-purple-500">
                <img src={dexscreener} alt="" />
              </div>
              <div className="col-span-3 rounded-lg border border-purple-500">
                Buy $WINDU
              </div> */}
            </div>
          </div>
          <div className="p-2">
            <img
              src={winduGibs}
              className="mx-auto"
              alt="Gib me dat for free"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
