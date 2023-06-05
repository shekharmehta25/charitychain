import React from 'react';

const Profile = () => {


    return (
        <div>
            <h1 id="h1-profile">Profile</h1>
            <div id="profile-container">
                <div class="profile-row">
                    <span class="profile-label">Name:</span>
                    <span class="profile-value" contenteditable="true">John Doe</span>
                </div>
                <div class="profile-row">
                    <span class="profile-label">Email:</span>
                    <span class="profile-value" contenteditable="true">johndoe@example.com</span>
                </div>
                <button class="update-button">Update Profile</button>
                <a href="main.html" class="back-button">Back</a>
            </div>
        </div>
    );
};

export default Profile;