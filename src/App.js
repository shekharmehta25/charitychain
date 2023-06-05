import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, onAuthStateChanged } from './firebase';
import Navbar from './NavBar';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import CharityDashboard from './charitydashboard';
import Profile from './profile';
import CharityDetail from './charitydetail';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage user={user} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/charitydashboard">
              <CharityDashboard />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/charitydetail">
              <CharityDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
