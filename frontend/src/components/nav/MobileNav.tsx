import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  tokens: any;
  handleLogout: () => void;
  showNav: boolean;
}

function MobileNav(props: IProps) {
  return (
    <li
      className={` w-32 flex-col ${
        props.showNav ? 'flex' : 'hidden'
      } absolute right-5 top-16 bg-primary h-56 items-start justify-around  md:hidden transition-height duration-300 `}
    >
      <Link
        className="text-l font-medium cursor-pointer text-secondary font-[Poppins] px-6"
        to="/about"
      >
        About
      </Link>
      <Link
        className="text-l font-bold cursor-pointer text-secondary font-[Poppins] px-6"
        to="/contact"
      >
        Contact
      </Link>

      {props.tokens ? (
        <button
          type="button"
          className="py-3 font-bold text-main capitalize bg-secondary rounded hover:bg-primary font-[Poppins] ml-4 px-6"
          onClick={props.handleLogout}
        >
          Logout
        </button>
      ) : (
        <div className="flex flex-col ">
          <Link
            className="py-3 font-bold mb-2 text-main capitalize bg-secondary rounded hover:bg-primary font-[Poppins] ml-4 px-6"
            to="/register"
          >
            Register
          </Link>
          <Link
            className="py-3 font-bold text-main capitalize bg-secondary rounded hover:bg-primary font-[Poppins] ml-4 px-6"
            to="/login"
          >
            Sign In
          </Link>
        </div>
      )}
    </li>
  );
}

export default MobileNav;
