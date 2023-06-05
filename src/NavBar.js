// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from './firebase';

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
            <h1>CharityChain</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {user ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        {user && user.userType === 'charity' && (
                          <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/add-charity">Add Charity</Link>
                            <Link to="/transactions">Transactions</Link>
                          </>
                        )}
                        <Link to="/login" onClick={handleSignOut}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default NavBar;
