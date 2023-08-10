import React from 'react';
import { auth } from './firebase';
import Slider from "react-slick";

const HomePage = () => {
    // Carousel settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Change slide every 3 seconds
      pauseOnHover: true
    };

    return ( 
        <div className="home">
            <h2>Welcome to CharityChain, {auth.currentUser && auth.currentUser.email }!</h2>
            
            {/* Carousel component */}
            <Slider {...settings}>
                <div>
                    <img src="charity1.png" alt="Description 1" />
                </div>
                <div>
                    <img src="charity2.jpeg" alt="Description 2" />
                </div>
                <div>
                    <img src="charity3.jpeg" alt="Description 3" />
                </div>
                <div>
                    <img src="charity4.png" alt="Description 2" />
                </div>
                <div>
                    <img src="charity5.png" alt="Description 2" />
                </div>
                <div>
                    <img src="charity6.png" alt="Description 2" />
                </div>
                <div>
                    <img src="charity7.avif" alt="Description 2" />
                </div>
                <div>
                    <img src="charity8.avif" alt="Description 2" />
                </div>
            </Slider>

            {/* <p>Thank You for Signing Up</p> */}
        </div>
     );
}
 
export default HomePage;
