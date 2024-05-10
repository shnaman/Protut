import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu toggle */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-bold text-2xl text-gray-800">
                Company Name
              </a>
              <img src="https://img.freepik.com/premium-vector/play-media-logo-template_164960-63.jpg?size=626&ext=jpg&ga=GA1.1.1205042534.1715257737&semt=ais" className="h-auto w-12" alt="" />
            </div>
          </div>

          {/* Navbar items */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:bg-gray-400 hover:text-gray-900">
                  Home
                </a>
                {/* Product dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    className="text-gray-800 hover:bg-gray-400 hover:text-gray-900"
                  >
                    Products
                  </button>
                  <div
                    className={`${
                      productDropdownOpen ? "block" : "hidden"
                    } absolute w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Element 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Element 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Element 3
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Element 4
                      </a>
                    </div>
                  </div>
                </div>

                {/* Login button */}
                <button className="text-gray-800 hover:bg-gray-400 hover:text-gray-900 border-solid border-2 border-black rounded-lg px-4 py-2">
                  Login
                </button>
                {/* Signup button */}
                <button className="text-gray-800 hover:bg-gray-400 hover:text-gray-900 border-solid border-2 border-black rounded-lg px-4 py-2">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-gray-800 hover:bg-gray-400 hover:text-gray-900 block">
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              className="text-gray-800 hover:bg-gray-400 hover:text-gray-900 w-full"
            >
              Products
            </button>
            <div
              className={`${
                productDropdownOpen ? "block" : "hidden"
              } absolute w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Element 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Element 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Element 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Element 4
                </a>
              </div>
            </div>
          </div>
          {/* Login button */}
          <button className="text-gray-800 hover:bg-gray-400 hover:text-gray-900 border-solid border-2 border-black rounded-lg px-4 py-2">
            Login
          </button>
          {/* Signup button */}
          <button className="text-gray-800 hover:bg-gray-400  hover:text-gray-900 border-solid border-2 border-black rounded-lg px-4 py-2">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
