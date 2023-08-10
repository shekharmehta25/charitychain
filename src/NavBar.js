// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { signOutUser } from "./firebase";
import logo from "./logo.png";

const NavBar = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await signOutUser();
      // Redirect to login or do something else
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="CharityChain Logo" className="navbar-logo" /> 
        <h1>CharityChain</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        {user ? (
          <>
            {user.userType === "charity" && (
              <>
                <Link to="/charity-dashboard">Charity Dashboard</Link>
                <Link to="/add-charity">Add Charity</Link>
                {/* <Link to="/transactions">Transactions</Link> */}
              </>
            )}
            {user.userType === "user" && (
              <>
                <Link to="/dashboard-user">Donor Dashboard</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/donations-list">Donations</Link>
              </>
            )}
            <Link to="/login" onClick={handleSignOut}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
