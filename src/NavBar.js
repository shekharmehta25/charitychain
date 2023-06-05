import { auth } from './firebase';

const Navbar = ({ user }) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return ( 
    <nav className="navbar">
        <h1>CharityChain</h1>
        <div className="links">
            { user ? <button onClick={handleLogout}>Logout</button> : (
              <>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
                <a href="/charitydashboard">Dashboard</a>
                <a href="/profile">Profile</a>
              </>
            )}
        </div>
    </nav>
  );
}

export default Navbar;
