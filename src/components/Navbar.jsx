import { useState } from "react";
import MediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const pageLowerCase = page.toLowerCase();
  return (
    <AnchorLink
      className={`${pageLowerCase === selectedPage ? "text-yellow" : ""}
        hover:text-yellow transition delay-500
      `}
      onClick={() => setSelectedPage(page)}
      href={`#${pageLowerCase}`}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfTheScreen, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = MediaQuery("(min-width : 768px)");
  const navBarBackground = isTopOfTheScreen ? "" : "bg-red";

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">MS</h4>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div>
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-sharp/50/menu.png"
                alt="menu"
              />
            </button>
          </div>
        )}
      </div>
      {/* MOBILE DROPDOWN MENU*/}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/32/external-close-button-it-and-computer-inkubators-basic-outline-inkubators.png"
                alt="close-button"
              />
            </button>
          </div>
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
