const NavBar = () => {
  return (
    <nav className="fixed z-[9] top-0 left-0 w-full flex items-center justify-between px-10 pt-5 pb-2 text-[3vw] md:text-lg text-white font-bold font-body [text-shadow:0px_-5px_10px_rgba(0,0,0,1)]">
      <ul className="nav-links flex items-center justify-between w-full md:max-w-md">
        <li className="nav-link">
          <a href="#" className="font-medium hover:underline">
            Skills
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="font-medium hover:underline">
            Career
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="font-medium hover:underline">
            Education
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="font-medium hover:underline">
            Fun
          </a>
        </li>
      </ul>
      <button className="hidden md:inline-block border-2 border-white rounded-full py-[2vw] px-[6vw] md:py-2 md:px-6 hover:bg-white hover:text-green-dark transition-colors duration-500">
        Contact
      </button>
    </nav>
  );
};

export default NavBar;
