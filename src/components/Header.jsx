import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          background: url('https://images.unsplash.com/photo-1504629071068-039f93c3959a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5f396ac6ee20a9e65fe9bbf0908983f&w=1000&q=80');
        }
        .flexed {
          text-align: right;
        }
      `}</style>
      <div>
        <h1>Mein Bier Haus</h1>
        <div className="flexed">
          <Link to="/">Home</Link> | <Link to="/newkeg">Employees</Link> | <Link to="/food">Food Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
