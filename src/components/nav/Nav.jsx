import { navLinks } from '../../constants';
import { RiMenu3Fill } from 'react-icons/ri';

const Nav = () => {
  return (
    <header className="fixed z-50 h-20 w-full bg-slate-950/50 px-2 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <span className="text-xl font-bold uppercase text-slate-50">windu</span>
        <nav className="select-none">
          <RiMenu3Fill className="text-3xl text-slate-50 md:hidden" />
          <ul className="hidden gap-10 md:flex">
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
      <nav className="h-40 w-1/2 -mt-[1px] bg-slate-950 text-slate-50 rounded-b-xl">
        <ul className='h-full border-b border-r border-l rounded-b-xl flex flex-col justify-evenly'>
          {navLinks.map(({ title, href }) => (
            <a key={title} href={href}>
              <li className='text-center capitalize'>{title}</li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
