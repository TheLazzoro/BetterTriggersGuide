import React, { FC } from "react";
import PropTypes from "prop-types";
import './Navigation.css'

const Navigation: FC = (props) => {
  return (
    <div>
      <header>Table of Contents</header>
      <nav>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
          <li>Link 6</li>
          <li>Link 7</li>
          <li>Link 8</li>
          <li>Link 9</li>
          <li>Link 10</li>
          <li>Link 11</li>
          <li>Link 13</li>
          <li>Link 13</li>
        </ul>
      </nav>

      <footer>footer area</footer>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
