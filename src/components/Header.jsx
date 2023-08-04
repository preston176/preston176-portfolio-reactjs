import React from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, ScrollLink } from 'react-scroll';

const Header = () => {
  const links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "home" },
    { name: "Contact me", link: "contact" },
  ]
  let [open, setOpen]

  return (
    <div className='w-full max-w-7xl'>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* img */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className='text-primary text-white'>
            Preston Mayieka
          </span>
        </div>
        {/* navbar */}
        <ul className='md:flex md: items-center md:pd-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in-out'>
          {links.map((item) =>
            <li key={crypto.randomUUID()}
              className='md:ml-8 md:my-0 my:7 font-semibold'>
              <Link to={item.link}
                activeClass='active'
                smooth={true}
                spy={true}
                className='text-white transition-all duration-500 hover:text-primary'
              >{item.name}</Link>
            </li>

          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;