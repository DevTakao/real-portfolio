const NavBar = () => {
  return (
    <nav className="fixed z-[9] top-0 left-0 w-full flex items-center justify-between px-10 pt-5 pb-2 text-[3vw] md:text-lg text-white font-bold font-body [text-shadow:0px_-5px_10px_rgba(0,0,0,1)]">
      <ul className="nav-links flex items-center justify-between w-full md:max-w-md">
        <li className="nav-link">
          <a href="#skills" className="font-medium hover:underline">
            Skills
          </a>
        </li>
        <li className="nav-link">
          <a href="#experience" className="font-medium hover:underline">
            Experience
          </a>
        </li>
        <li className="nav-link">
          <a href="#projects" className="font-medium hover:underline">
            Projects
          </a>
        </li>
        <li className="nav-link">
          <a href="#education" className="font-medium hover:underline">
            Education
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        className="hidden md:inline-block border-2 border-white rounded-full py-[2vw] px-[6vw] md:py-2 md:px-6 hover:bg-white hover:text-green-dark hover:[text-shadow:none] transition-colors duration-500"
      >
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
