import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from './firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const CharityDashboard = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const eventsContainer = document.getElementById('events-container');

        // Retrieve data from Firestore
        const fetchEvents = async () => {
            const eventsCollection = firebase.firestore().collection('charities');
            const snapshot = await eventsCollection.get();
            const eventData = snapshot.docs.map((doc) => doc.data());
            setEvents(eventData);
        };

        fetchEvents();

        setEvents.forEach(event => {
            const eventBox = document.createElement('div');
            eventBox.classList.add('event-box');

            const eventTitle = document.createElement('div');
            eventTitle.classList.add('event-title');
            eventTitle.textContent = event.title;

            const eventDescription = document.createElement('div');
            eventDescription.classList.add('event-description');
            eventDescription.textContent = event.description;

            const eventLocation = document.createElement('div');
            eventLocation.classList.add('event-location');
            eventLocation.textContent = `Location: ${event.location}`;

            const eventDateTime = document.createElement('div');
            eventDateTime.classList.add('event-date-time');
            eventDateTime.textContent = `Date & Time: ${event.date} at ${event.time}`;

            const eventButton = document.createElement('button');
            eventButton.classList.add('event-button');
            eventButton.textContent = 'View Charity';

            eventBox.appendChild(eventTitle);
            eventBox.appendChild(eventDescription);
            eventBox.appendChild(eventLocation);
            eventBox.appendChild(eventDateTime);
            eventBox.appendChild(eventButton);

            eventsContainer.appendChild(eventBox);
        });
    }, []);

    return (
        <div id="events-container"></div>
    );
};

export default CharityDashboard;