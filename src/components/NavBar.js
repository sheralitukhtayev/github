import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import gitIcon from "./git-icon.png";
import { Link } from "react-router-dom";
// import Input from "./Input";

import React from "react";

function NavBar({ user }) {
  // export default const username = document.getElementById("input");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="left">
        <Link exact to="/">
          <img
            src={gitIcon}
            width={"35"}
            height={"35"}
            className={"mr-3 avatar img"}
            alt={"user"}
          />
        </Link>

        <form>
          <input
            id="input"
            type="text"
            placeholder="Search or jump to... "
            className="input"
          />
        </form>
        <div className="navitem">
          <ul>
            <Link className="link" exact to="/pulls">
              Pulls
            </Link>
            <Link className="link" exact to="/issues">
              Issues
            </Link>
            <Link className="link" exact to="/marketplace">
              Marketplace
            </Link>
            <Link
              href="https://github.com/${user.login}/explore"
              className="link"
              exact
              to="/explore"
            >
              Explore
            </Link>
          </ul>
        </div>
      </div>
      <div className="right">
        <svg height={"16px"} width={"16px"} className="icon">
          <path
            fill="white"
            fill-rule="evenodd"
            d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
          ></path>
          <path
            fill="white"
            d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
          ></path>
        </svg>
        <svg height={"16px"} width={"16px"} className="icon">
          <path
            fill="white"
            fill-rule="evenodd"
            d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
          ></path>
        </svg>
        {/* <Link exact to="/${user.login}"> */}
        <img
          href={user.login}
          src={user.avatar_url}
          className="pro-img avatar icon"
          alt=""
        />
        {/* </Link> */}
      </div>
    </nav>
  );
}

export default NavBar;
