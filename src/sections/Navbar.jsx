import { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="py-6 lg:py-10 max-w-[1200px] mx-auto">
      <nav className="hidden lg:flex justify-between items-center">
        <div>
          <img src={logo} alt="This is the logo of the website" />
        </div>
        <ul className="flex gap-6 items-center">
          <li>
            <a
              href=""
              className="text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-Dark-Blue font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              Commmunity
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="px-6 py-2 rounded-full bg-Bright-Red text-Very-Light-Gray box hover:opacity-40 hover:cursor-pointer"
        >
          Get Started
        </a>
      </nav>

      <nav className="lg:hidden flex items-center justify-between relative">
        <div className="flex lg:hidden gap-3 items-center justify-between px-6 py-4 w-full">
          <img src={logo} alt="" width={120} height={120} />

          <img
            className="cursor-pointer"
            src={isOpen ? iconClose : hamburger}
            alt="This is the icon that opens the mobile navigation"
            width={isOpen ? 20 : 25}
            height={25}
            onClick={toggleNavigation}
          />
        </div>

        {isOpen && (
          <>
            {/* Dark wrapper background */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleNavigation}
            />
            <div className="absolute lg:hidden bg-white top-[5rem] z-50 w-[80%] mx-auto left-0 right-0 rounded-md">
              <ul className="flex flex-col gap-8 items-center barlow-semibold py-10">
                <li>
                  <a href="" className="text-Dark-Blue font-medium">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="" className="text-Dark-Blue font-medium">
                    Product
                  </a>
                </li>
                <li>
                  <a href="" className="text-Dark-Blue font-medium">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="text-Dark-Blue font-medium">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="text-Dark-Blue font-medium">
                    Commmunity
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

{
  /* <ul className="flex flex-col gap-8 items-center barlow-semibold">
<li>
  <a href="#" className="text-Very-Dark-Grayish-Blue text-lg">
    About
  </a>
</li>
<li>
  <a href="#" className="text-Very-Dark-Grayish-Blue text-lg">
    Services
  </a>
</li>
<li>
  <a href="#" className="text-Very-Dark-Grayish-Blue text-lg">
    Projects
  </a>
</li>
<li>
  <a
    href="#"
    className="text-black bg-Yellow px-6 py-4 flex justify-center items-center rounded-full fraunces-700 "
  >
    CONTACT
  </a>
</li>
</ul> */
}
