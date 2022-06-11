import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/store";

import MobileNav from "./MobileNav";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useAppDispatch();
  const tokens = localStorage.getItem("_id");
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("_id");
    navigate("/");
  };
  console.log(tokens);
  return (
    <nav className="absolute z-20 w-full bg-black  py-1">
      <ul className="mx-auto flex max-w-6xl items-center justify-between">
        <li className="flex items-center">
          <img src={"l"} alt="" className="h-14 w-14" />
          <h1 className="ml-2 text-white">
            Get <br /> token
          </h1>
        </li>
        <svg
          className="mx-2 mr-16 h-8 w-8 cursor-pointer fill-black text-2xl md:hidden "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={() => setShowNav(!showNav)}
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
        <MobileNav
          handleLogout={handleLogout}
          tokens={tokens}
          showNav={showNav}
        />

        <li className="hidden md:block">
          <Link
            className="text-l cursor-pointer px-6 font-[Poppins] font-medium text-blue-800"
            to="/posts"
          >
            All posts
          </Link>
          <Link
            className="text-l cursor-pointer px-6 font-[Poppins] font-thin text-blue-800"
            to="/profile"
          >
            profile
          </Link>
          <Link
            className="rounded bg-blue-500 py-3 px-6 font-[Poppins] font-thin capitalize text-white hover:bg-blue-800"
            to="/create-post"
          >
            create post
          </Link>
          {tokens ? (
            <button
              type="button"
              className="text-main ml-4 rounded bg-blue-500 py-3 px-6 font-[Poppins] font-thin capitalize hover:bg-blue-800"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                className="text-main ml-4 rounded bg-blue-500 py-3 px-6 font-[Poppins] font-thin capitalize hover:bg-blue-800"
                to="/register"
              >
                Register
              </Link>
              ;
              <Link
                className="text-main ml-4 rounded bg-blue-500 py-3 px-6 font-[Poppins] font-thin capitalize hover:bg-blue-800"
                to="/"
              >
                login
              </Link>
              ;
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
