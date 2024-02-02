// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 absolute bottom-0 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-xl font-bold">Hunkaar'24</p>
          <span className="text-gray-400">|</span>
          <a href="./About" className="hover:text-gray-300">
            About Us
          </a>
          <a href="./Contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <div>
          <p className="text-sm">© 2024 Hunkaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
