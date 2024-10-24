import { useState } from 'react';
import { navLinks } from '../../constants';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import GradientDivider from '../../ui/GradientDivider';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 h-16 w-full bg-slate-950/50 px-2 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <a href="#home" onClick={() => setIsOpen(false)}>
          <span className="select-none text-xl font-bold uppercase text-slate-50">
            windu
          </span>
        </a>
        <nav className="select-none">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <RiMenu3Fill className="text-3xl text-slate-50" />
            ) : (
              <RiCloseFill className="text-3xl text-slate-50" />
            )}
          </button>
          <ul className="hidden gap-10 lg:flex">
            {navLinks.map(({ title, href }) => (
              <a key={title} href={href}>
                <li className="text-lg font-semibold capitalize text-slate-50 hover:text-purple-500">
                  {title}
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <nav
        className={`absolute right-0 -mt-[1px] h-40 w-1/2 rounded-b-xl border-b-2 border-l-2 border-r-2 border-purple-500 bg-slate-950 text-slate-50 ${isOpen ? 'h-40' : 'hidden h-0'} z-50 transition-all duration-300 ease-out`}
      >
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} h-full flex-col justify-evenly rounded-b-xl`}
        >
          {navLinks.map(({ title, href }) => (
            <a
              key={title}
              className="mx-auto w-fit p-1"
              href={href}
              onClick={() => setIsOpen(false)}
            >
              <li className="capitalize">{title}</li>
            </a>
          ))}
        </ul>
      </nav>
      <GradientDivider />
    </header>
  );
};

export default Nav;

//kek