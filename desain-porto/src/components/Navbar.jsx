import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setShow(!show);

  const scrollActive = scroll ? "py-6 bg-white shadow-md" : "py-4";
  const menuActive = show ? "top-20 opacity-100" : "-top-96 opacity-0";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar transition-all duration-300 ${scrollActive}`}>
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-2xl font-bold">About Me</h1>
          </div>

          {/* Menu */}
          <ul
            className={`
              flex flex-col w-full px-6 py-8 gap-6 fixed left-0 z-20 bg-sky-400 text-white font-bold
              shadow-lg transition-all duration-500
              ${menuActive}
              md:flex-row md:static md:w-auto md:px-0 md:py-0 md:bg-transparent md:shadow-none 
              md:opacity-100 md:top-auto md:z-auto md:gap-12 md:text-black
            `}
            onClick={() => setShow(false)}
          >
            <li><a href="#" className="hover:text-blue-500">Biodata</a></li>
            <li><a href="#" className="hover:text-blue-500">Pendidikan</a></li>
            <li><a href="#" className="hover:text-blue-500">Keahlian</a></li>
            <li><a href="#" className="hover:text-blue-500">Sertifikat</a></li>
          </ul>

          {/* Contact & Toggle */}
          <div className="flex items-center gap-4">
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Contact
            </a>
            <i
              className={`text-3xl cursor-pointer md:hidden ${show ? "ri-close-line" : "ri-menu-3-line"}`}
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
