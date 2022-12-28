import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? " flex-col flex items-center fixed inset-0 left-1/4 gap-8 p-8 bg-black/40 backdrop-blur-lg justify-center md:hidden"
          : "hidden"
      }
    >
      <Close onClick={showMenu} className="scale-150" />
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Testimony</Link>
      </li>
      <li>
        <Link to="/">Information</Link>
      </li>
      <li>
        <Link to="/">Jobs</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  );
};

export default MenuItems;
