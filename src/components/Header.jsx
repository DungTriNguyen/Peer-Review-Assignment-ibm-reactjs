import { MegaMenu, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; // Nhập biểu tượng ở đây
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <MegaMenu className="flex justify-between items-center py-4">
          <Navbar.Brand className="flex items-center space-x-4">
            <img src={logo} className="h-10" alt="Company Logo" />
            <span className="text-xl font-bold text-teal-600">DD8 COMPANY</span>
          </Navbar.Brand>

          <Navbar className="hidden lg:flex space-x-8">
            <Navbar.Link
              href="/"
              className={`${
                location.pathname === "/"
                  ? "text-teal-600 underline underline-offset-8 decoration-2"
                  : "text-gray-700 hover:text-teal-600 transition-colors"
              } font-medium`}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              href="/shop"
              className={`${
                location.pathname === "/shop"
                  ? "text-teal-600 underline underline-offset-8 decoration-2"
                  : "text-gray-700 hover:text-teal-600 transition-colors"
              } font-medium`}
            >
              Shop
            </Navbar.Link>
          </Navbar>

          <div className="lg:hidden">
            <button
              className="text-gray-700 focus:outline-none focus:text-teal-600"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <Navbar.Link className="ml-auto">
            <a
              href="/cart"
              className={`${
                location.pathname === "/cart"
                  ? "text-teal-600 underline underline-offset-8 decoration-2"
                  : "text-gray-700 hover:text-teal-600 transition-colors"
              } relative`}
            >
              <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                3
              </span>
            </a>
          </Navbar.Link>
        </MegaMenu>
      </div>
    </header>
  );
}
