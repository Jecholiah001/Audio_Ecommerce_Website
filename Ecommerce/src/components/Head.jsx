/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import Cart from "../pages/Cart";
import Shop from "./Shop";

function Header({ data }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth < 800);
  const placement = 'right';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state along with menu
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <nav className="w-full selection:font-custom bg-lighterBlack text-white flex justify-between lg:py-[20px] lg:px-[150px]">
        <div onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? (
            <span>
              <FaTimes />
            </span>
          ) : (
            <span>
              <FaBars />
            </span>
          )}
        </div>

        <h1 className="lg:text-[30px] ml-2 font-bold">audiophile</h1>

        <div
          className={`lg:absolute lg:left-[25rem] lg:mt-4 xl:mx-40 xl2:mx-60 2xl:text-[40px] ${
            isDrawerOpen ? "" : "hidden sm:flex"
          }`}
        >
          <div className={`lg:flex lg:flex-row sm:flex-col`}>
            <div
              className={`fixed inset-y-0 ${
                placement === "right" ? "right-0" : "left-0"
              } max-w-full flex`}
            >
              <div
                className={`relative w-screen max-w-md ${
                  isDrawerOpen
                    ? "ease-in-out transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <div className="h-full bg-white shadow-xl overflow-y-scroll">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold border-b pb-2">
                      Navigation
                    </h2>
                    <button
                      className="absolute top-0 right-0 p-2"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Close
                    </button>
                    <div className="mt-4">
                      <Shop data={data} />
                      {/* Assuming 'data' is your product data */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] lg:flex items-center justify-evenly text-[13px] leading-[25px] tracking-[1px]">
              <Link to={"/"} className="hover:text-deepOrange">
                HOME
              </Link>
              <Link to={"/headphones"} className="hover:text-deepOrange">
                HEADPHONES
              </Link>
              <Link to={"/speakers"} className="hover:text-deepOrange">
                SPEAKERS
              </Link>
              <Link to={"/earphones"} className="hover:text-deepOrange">
                EARPHONES
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center" onClick={toggleCart}>
          <FaShoppingCart className="my-3" />
          <span className="ml-1">{cart.length}</span>
        </div>
        {showCart && <Cart />}
      </nav>
    </>
  );
}

export default Header;
