import React from 'react';
import './App.css';
import { Link } from "react-router-dom";  

function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <div className="nav">
      {/* <a class="active" href="">Home</a>
      <a path="/about" component={Create}>Create</a>
      <a path="/shop" component={View}>View</a>
      <a path="/edit" component={Edit}>Edit</a>
      <a path="/admin" component={Admin}>Admin</a> */}
      <nav >
        <ul className="nav-links">
          <Link style={navStyle} to="/"><li>Home</li></Link>
          <Link style={navStyle} to="/create"><li>Create</li></Link>
          <Link style={navStyle} to="/view"><li>View</li></Link>
          <Link style={navStyle} to="/edit"><li>Edit</li></Link>
          <Link style={navStyle} to="/admin"><li>Admin</li></Link>
          
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
