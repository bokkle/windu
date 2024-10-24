import logo from '../../assets/winduLogo.png';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
import { ca } from '../../constants';

const Footer = () => {
  return (
    <footer className="flex justify-center bg-slate-950">
      <div className="my-20 flex flex-col justify-center gap-4">
        <img
          src={logo}
          className="mx-auto size-40 select-none rounded-full bg-purple-500"
          alt="logo"
        />
        <span className="select-none text-center font-starJedi text-2xl text-slate-100 md:text-3xl">
          windu nuffin
        </span>
        <span className="text-center text-xs font-thin text-slate-100 sm:text-lg lg:text-xl">
          {ca}
        </span>
        <div className="flex justify-center gap-6">
          <FaSquareXTwitter className="text-5xl text-slate-400 transition-colors duration-500 ease-out hover:text-slate-100" />
          <FaTelegram className="text-5xl text-slate-400 transition-colors duration-500 ease-out hover:text-slate-100" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
