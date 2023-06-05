import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, db, onAuthStateChanged, getDoc, doc } from './firebase';

import Navbar from './NavBar';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import DashboardCharity from './DashboardCharity';
import AddCharity from './AddCharity';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userTypeDoc = await getDoc(doc(db, 'users', currentUser.uid));
        currentUser.userType = userTypeDoc.data().userType;
      }
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
            <Route path="/dashboard">
                <DashboardCharity user={user} />
            </Route>
            <Route path="/add-charity">
                <AddCharity user={user} />
            </Route>
            <Route path="/login">
                <Login setUser={setUser} />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
