import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      {/* <h1 className="logga">logga</h1> */}
      <img className="logo" src="https://cdn-icons-png.freepik.com/256/11207/11207604.png?semt=ais_hybrid"></img>
      <div>
        <Link to="/">About</Link>
        <Link to="/Informationpage">Information</Link>
        <Link to="/Todopage">Todo list</Link>
      </div>
    </div>
  );
};

export default NavBar;
