import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FisaluLogo from "../../assets/imgs/fisalu.png";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../features/user/authSlice";

const NavBar = () => {
  const [isLog, setIsLog] = useState(false);
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(setLogout());
  };

  useEffect(() => {
    const l = JSON.parse(localStorage.getItem("profile"));
    if (l == null) {
      setIsLog(false);
    } else {
      setIsLog(true);
    }
    console.log(isLog);
    console.log(l);
  }, []);

  return (
    <nav className=" px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={FisaluLogo} className="w-12" alt="Fisalu Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col items-center p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent text-[#AA59CB] md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/perfil"
                className="block px-5 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/estadisticas"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Estadisticas
              </Link>
            </li>
            <li>
              <Link
                to="/control"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Panel General
              </Link>
            </li>
            {isLog == false ? (
              <Link
                to="/Login"
                className="border border-black bg-[#8FE3CF] hover:bg-red-700 text-white font-medium py-2 px-5 rounded-lg"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={Logout}
                className="border border-black bg-[#8FE3CF] hover:bg-red-700 text-white font-medium py-2 px-5 rounded-lg"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
