import React, { useState, useEffect, useRef } from "react";
import getWeb3 from "./getWeb3";
import abi from "./abi.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth, db, onAuthStateChanged, getDoc, doc } from "./firebase";

import Navbar from "./NavBar";
import HomePage from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";
import DashboardCharity from "./DashboardCharity";
import AddCharity from "./AddCharity";
import DashboardUser from "./DashboardUser";
import Donation from "./Donation";
import ListDonations from './ListDonations';

function App() {
  const [user, setUser] = useState(null);
  const abiContractRef = useRef(null);
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const web = await getWeb3();
        setCurrentAccount(await web.eth.currentProvider.selectedAddress);
        const abiContract = new web.eth.Contract(
          abi["abi"],
          "0xc5315fc20b60ccf7768c02c1673a4c26db99768a" // Contract Address
        );
        abiContractRef.current = abiContract;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userTypeDoc = await getDoc(doc(db, "users", currentUser.uid));
        currentUser.userType = userTypeDoc.data().userType;
        console.log(currentUser.userType); // Debug line
      }
      setUser(currentUser);
    });

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
            <Route path="/charity-dashboard">
              <DashboardCharity user={user} abiContractRef={abiContractRef} />
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
            <Route path="/dashboard-user">
              <DashboardUser user={user} abiContractRef={abiContractRef} />
            </Route>
            <Route path="/donate">
              <Donation
                user={user}
                abiContractRef={abiContractRef}
                currentAccount={currentAccount}
              />{" "}
              {/* Pass user prop to Donation */}
            </Route>
            <Route path="/donations-list">
              <ListDonations />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
