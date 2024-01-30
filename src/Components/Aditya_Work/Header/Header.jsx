import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="rounded-xl shadow sticky z-50 top-0 bg-gradient-to-b from-gray-900 to-gray-600">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 sm:flex-wrap">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl text-orange-400 font-bold">Hunkaar</h1>
            </Link>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                {isMobileMenuOpen ? "Close" : "Menu"}
              </button>
            </div>
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-between">
                <li className="text-white hover:text-lg ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-grey-700 "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-white hover:text-lg mr-10 ">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-grey-700 "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="text-white hover:text-lg mr-10">
                  <NavLink
                    to="/team"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-grey-700 "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Team
                  </NavLink>
                </li>
                <li className="text-white hover:text-lg mr-10">
                  <NavLink
                    to="/event"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-grey-700 "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Event
                  </NavLink>
                </li>
                <li className="text-white hover:text-lg mr-10">
                  <NavLink
                    to="/sponsors"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-grey-700 "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Sponsors
                  </NavLink>
                </li>
                <li className="text-white hover:text-lg mr-10">
                  <NavLink
                    to="/merch"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-grey-700 "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Merchandise
                  </NavLink>
                </li>
                <li className="text-white hover:text-lg mr-10">
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-grey-700 "
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Admin
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
