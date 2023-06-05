import React from 'react';

const DashboardCharity = ({ user }) => {
    return (
        <div>
            <h1>Welcome, {user ? user.displayName : 'Loading...'}</h1>
            <p>This is your dashboard. You can see all donations here.</p>
        </div>
    )
}

export default DashboardCharity;
