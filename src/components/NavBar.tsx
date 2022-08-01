import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './NavBar.css'

const NavBar: FC = (props) => {

  return (
    <div>
      <nav className="navbar navbar--fixed-top">
        <ul >
          <li>
            <li className="navbar-li" style={{ float: "left" }}><Link className="mainNav" to="BetterTriggersGuide/">Better Triggers</Link></li>
          </li>

          <li className="navbar-li" style={{ float: "left" }}><Link className="navlink" to="BetterTriggersGuide/Guide">Guide</Link></li>
          <li className="navbar-li" style={{ float: "left" }}><Link className="navlink downloadlink" to="BetterTriggersGuide/Download">Download</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
