import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary px-4">
      <Link className="navbar-brand fw-bold text-primary" to="/">STOCK-MERN</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
        </ul>
        <div className="d-flex align-items-center">
          <span className="text-secondary me-3 small">Role: Investor</span>
          <button className="btn btn-outline-danger btn-sm">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;