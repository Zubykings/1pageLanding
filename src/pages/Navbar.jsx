import { Component } from "react";
// import '../component/main'
import openNav from '../assets/openNav.svg'
import closeNav from '../assets/closeNav.svg'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <nav className=" text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-[42px]">
            <span className="font-extrabold text-blue-500">1</span>PAGE
          </h1>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-blue-500/20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-blue-500/20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Advertsing
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-blue-500/20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Insurance
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-blue-500/20 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="-mr-2 flex sm:hidden">
              <button
                type="button"
                onClick={this.handleToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-500/20 focus:outline-none  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-gray-300 hover:bg-blue-500/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Marketing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-blue-500/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Advertising
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-blue-500/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Insurance
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-blue-500/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us 
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

