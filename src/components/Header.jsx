import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">New Keg</Link> | <Link to="/food">Food Menu</Link>
    </div>
  );
}

export default Header;
