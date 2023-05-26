import React from 'react';
import { auth } from './firebase';

const HomePage = () => {
    return ( 
        <div className="home">
            <h2>Welcome to CharityChain, {auth.currentUser && auth.currentUser.email}!</h2>
            {/* <p>Thank You for Signing Up</p> */}
        </div>
     );
}
 
export default HomePage;
