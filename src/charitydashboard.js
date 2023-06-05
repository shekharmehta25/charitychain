import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const CharityDashboard = () => {

    const history = useHistory();
    const events = [
        {
            title: "Music Concert",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt auctor ex vel molestie.",
            location: "Central Park",
            date: "April 10, 2023",
            time: "7:00 PM",
            price: "100",
            websiteLink: "https://example.com/music-concert",
            instagramLink: "https://www.instagram.com/music-concert/",
            speakerName: "John Doe"
        },
        {
            title: "Art Exhibition",
            description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut feugiat ex. ",
            location: "Metropolitan Museum of Art",
            date: "May 12, 2023",
            time: "6:00 PM",
            price: "50",
            websiteLink: "https://example.com/art-exhibition",
            instagramLink: "https://www.instagram.com/art-exhibition/",
            speakerName: "Dwane Johnson"
        },
        {
            title: "Charity Fundraiser",
            description: "Donec congue sapien tellus, eu fermentum odio accumsan ut. Maecenas posuere ullamcorper dolor ut dapibus.",
            location: "Marriott Hotel",
            date: "June 18, 2023",
            time: "5:00 PM",
            price: "10",
            websiteLink: "https://example.com/charity-fundraiser",
            instagramLink: "https://www.instagram.com/charity-fundraiser/",
            speakerName: "Alex Smith"
        },
        {
            title: "Comedy Show",
            description: "Phasellus nec varius metus. Sed id ipsum volutpat, ultrices nibh non, efficitur ex.",
            location: "Comedy Cellar",
            date: "July 23, 2023",
            time: "8:00 PM",
            price: "20",
            websiteLink: "https://example.com/comedy-show",
            instagramLink: "https://www.instagram.com/comedy-show/",
            speakerName: "Sarah Johnson"
        },
        {
            title: "Food Festival",
            description: "Fusce efficitur massa enim, nec volutpat ipsum pulvinar eu. Sed lacinia dui eu semper tempus.",
            location: "Bryant Park",
            date: "August 28, 2023",
            time: "12:00 PM",
            price: "Free",
            websiteLink: "https://example.com/food-festival",
            instagramLink: "https://www.instagram.com/food-festival/",
            speakerName: "Maria Rodriguez"
        },
        {
            title: "Technology Conference",
            description: "Maecenas euismod, dolor ac luctus faucibus, orci neque vehicula purus, at cursus enim ipsum id elit.",
            location: "Javits Center",
            date: "September 16-17, 2023",
            time: "9:00 AM - 5:00 PM",
            price: "250",
            websiteLink: "https://example.com/technology-conference",
            instagramLink: "https://www.instagram.com/technology-conference/",
            speakerName: "Mark Lee"
        },
    ];

    useEffect(() => {
        const eventsContainer = document.getElementById('events-container');

        events.forEach(event => {
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