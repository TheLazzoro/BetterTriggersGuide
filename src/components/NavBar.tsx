import React, { FC } from "react";
import PropTypes from "prop-types";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './NavBar.css'

const TopBar: FC = (props) => {
  return (
    <div>

      <nav className="navbar navbar--fixed-top">
        <ul>
          <li>
          <li><Link className="mainNav" to="/">Better Triggers</Link></li>
          </li>
          <li><Link className="navlink" to="/Guide">Guide</Link></li>
          <li><Link className="navlink downloadlink" to="/Download">Download</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>

  );
};

TopBar.propTypes = {};

export default TopBar;
