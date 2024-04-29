import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      {/* <h1 className="logga">logga</h1> */}
      <Link to="/">
        <img className="logo" src="https://cdn-icons-png.freepik.com/256/11207/11207604.png?semt=ais_hybrid" />
      </Link>
      <div>
        {/* <Link to="/"></Link> */}
        <Link className="link" to="/Aboutpage">
          About
        </Link>
        <Link className="link" to="/Informationpage">
          Information
        </Link>
        <Link className="link" to="/Todopage">
          Todo list
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
