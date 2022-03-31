import React, { FC } from "react";
import PropTypes from "prop-types";
import './TopBar.css'

const TopBar: FC = (props) => {
  return (
    <nav className="navbar navbar--fixed-top">
      <ul>
        <li>
          <a style={{fontWeight: "bold"}} href="default.asp">Better Triggers</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
      </ul>
    </nav>
  );
};

TopBar.propTypes = {};

export default TopBar;
