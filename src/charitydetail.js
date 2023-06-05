import React from 'react';

const CharityDetail = () => {


    return (
        <div>
            <section class="event-details">
                <div class="details-left">
                    <div class="event-info">
                        <h2>Description</h2>
                        <p id="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ex euismod, dapibus velit nec, efficitur nulla. Suspendisse in malesuada nibh. Donec tincidunt vitae sapien vel maximus. Vestibulum eu nisl ultricies, suscipit dolor eget, pulvinar mi. Nullam maximus dolor sit amet nisi congue, ut iaculis ipsum mollis.</p>
                        <h2>Location</h2>
                        <p id="event-location">123 Main St, City, State</p>
                        <h2>Date & Time</h2>
                        <p id="event-date-time">Friday, April 1st, 2023 at 6:00pm</p>
                        <h2>Speaker</h2>
                        <p id="event-speaker">John Smith</p>
                    </div>
                </div>
                <div class="details-right">
                    <div class="event-price">
                        <h2>Price</h2>
                        <p id="event-price">$50</p>
                    </div>
                    <div class="event-links">
                        <h2>Links</h2>
                        <ul>
                            <li><a id="event-website" href="https://www.website.com"><i class="fas fa-globe"></i> Website</a></li>
                            <li><a id="event-instagram" href="https://www.instagram.com"><i class="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CharityDetail;