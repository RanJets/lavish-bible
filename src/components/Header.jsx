import { Close, MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center uppercase">
      <div className=" text-2xl font-bold text-center">
        <h1>
          e <span className="block text-4xl">Tail</span>
        </h1>
      </div>
      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <MenuOutlined onClick={showMenu} />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase bg-black/30 rounded-md">
          <li>
            <Link to="/">Verse of The Day</Link>
          </li>
          <li>
            <Link to="/">Bible</Link>
          </li>
          <li>
            <Link to="/">Devotion</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>

        <ul
          className={
            active
              ? " flex-col flex items-center fixed inset-0 left-1/4 gap-8 p-8 bg-black/40 backdrop-blur-lg justify-center md:hidden"
              : "hidden"
          }
        >
          <Close onClick={showMenu} className="scale-150" />

          <li>
            <Link to="/">Verse of The Day</Link>
          </li>
          <li>
            <Link to="/">Bible</Link>
          </li>
          <li>
            <Link to="/">Devotion</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
