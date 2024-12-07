import React, { useState } from "react";
import Pill from "../Pill/Pill";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const name = useSelector((state) => state.formData.basicInfo.name);
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const theme = useSelector((state) => state.theme.themes[selectedTheme]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div
      className={`fixed top-0 w-full flex justify-between items-center h-[10vh] px-5 md:px-10 ${theme.backgroundColor} ${theme.borderColor} z-50`}
    >
      <Link
        onClick={handleLinkClick}
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        className={`text-xl md:text-2xl font-semibold cursor-pointer ${theme.textColor}`}
      >
        {`<${name || "User"} />`}
      </Link>

      {/* Hamburger Menu */}
      <div
        className="md:hidden flex flex-col cursor-pointer space-y-1"
        onClick={toggleMenu}
      >
        <span className={`w-6 h-0.5 ${theme.textColor} transition-transform duration-300`}></span>
        <span className={`w-6 h-0.5 ${theme.textColor} transition-transform duration-300`}></span>
        <span className={`w-6 h-0.5 ${theme.textColor} transition-transform duration-300`}></span>
      </div>

      {/* Menu */}
      <div
        className={`${
          menuOpen
            ? `flex flex-col justify-center items-center h-screen w-full absolute top-0 left-0 ${theme.backgroundColor}`
            : "hidden"
        } md:flex md:flex-row md:static md:h-auto md:w-auto md:gap-10`}
      >
        <Link
          onClick={handleLinkClick}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Pill content="About" theme={theme} />
        </Link>
        <Link
          onClick={handleLinkClick}
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Pill content="Skills" theme={theme} />
        </Link>
        <Link
          onClick={handleLinkClick}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Pill content="Projects" theme={theme} />
        </Link>
        <Link
          onClick={handleLinkClick}
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Pill content="Contact" theme={theme} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
