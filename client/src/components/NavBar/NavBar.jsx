import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FisaluLogo from "../../assets/imgs/fisalu.png";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../features/user/authSlice";

const NavBar = () => {
  const [isLog, setIsLog] = useState(false);
  const [showNav, setShowNav] = useState(false)
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(setLogout());
  };

  const handleNavbar = ()=>{
    setShowNav(!showNav)
  }
  
  const { user } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    const l = JSON.parse(localStorage.getItem("profile"));
    if (l == null) {
      setIsLog(false);
    } else {
      setIsLog(true);
    }
  }, [user]);

  return (
    <nav className=" py-2.5 bg-[#5A16F3] relative ">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-2 ">
        <Link to="/" className="flex items-center">
          <img src={FisaluLogo} className="w-10 md:w-12" alt="Fisalu Logo" />
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
            onClick={handleNavbar}
            className="w-6 h-6"
            fill="#ffffff"
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
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-[#8FE3CF]"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="block px-5 text-[#fdea00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8FE3CF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Equipo
              </Link>
            </li>
            <li>
              <Link
                to="/estadisticas"
                className="block py-2 pr-4 pl-3 text-[#fdea00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8FE3CF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Estadisticas
              </Link>
            </li>
            <li>
              <Link
                to="/control"
                className="block py-2 pr-4 pl-3 text-[#fdea00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8FE3CF] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Panel General
              </Link>
            </li>
            {isLog == false ? (
              <Link
                to="/Login"
                className=" bg-[#8FE3CF] hover:bg-red-700 text-white font-medium py-2 px-5 rounded-lg"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={Logout}
                className="bg-[#8FE3CF] hover:bg-red-700 text-white font-medium py-2 px-5 rounded-lg"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
      <div className={showNav? " w-full absolute bg-[#5A16F3] m-0 z-50 visible drop-shadow-lg" : " w-full absolute bg-[#5A16F3] m-0 z-50 invisible"}>
        <ul onClick={handleNavbar} className=" flex flex-col items-center py-4 md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0" >
            <li>
              <Link
                to="/"
                className="block py-2  text-white font-normal "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="block text-white font-normal"
              >
                Equipo
              </Link>
            </li>
            <li>
              <Link
                to="/estadisticas"
                className="block py-2  text-white font-normal"
              >
                Estadisticas
              </Link>
            </li>
            <li>
              <Link
                to="/control"
                className="block py-2 text-white font-normal"
              >
                Panel General
              </Link>
            </li>
            {isLog == false ? (
              <Link
                to="/Login"
                className="text-white font-normal "
              >
                Login
              </Link>
            ) : (
              <button
                onClick={Logout}
                className="text-white font-normal"
              >
                Logout
              </button>
            )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
