import React from 'react';

const NavItems = () => (
  <ul className="flex flex-row gap-4 justify-between ">
    <li className="text-neutral-400 hover:text-white font-generalsans">
      <a href="#home" className="nav-li_a">Home</a>
    </li>
    <li className="text-neutral-400 hover:text-white font-generalsans">
      <a href="#about" className="nav-li_a">About</a>
    </li>
    <li className="text-neutral-400 hover:text-white font-generalsans">
      <a href="#work" className="nav-li_a">Work</a>
    </li>
    <li className="text-neutral-400 hover:text-white font-generalsans">
      <a href="#contact" className="nav-li_a">Contact</a>
    </li>
  </ul>
);

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Anamika
          </a>
          <nav className="flex">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
