import React from 'react';
import './ListDonations.css'; // Import the CSS (we'll create this next)

const ListDonations = () => {
    // Mock data structure - replace with your data source
    const donations = [
        { 
            image: "WWF.png",
            description: "The World Wide Fund for Nature (WWF) is a Swiss-based international non-governmental organization founded in 1961 that works in the field of wilderness preservation and the reduction of human impact on the environment. It was formerly named the World Wildlife Fund, which remains its official name in Canada and the United States."
        },
        { 
            image: "peta.png",
            description: "People for the Ethical Treatment of Animals (PETA) is an American animal rights nonprofit organization based in Norfolk, Virginia, and led by Ingrid Newkirk, its international president. PETA reports that PETA entities have more than 9 million members globally. \nFounded in March 1980 by Newkirk and animal rights activist Alex Pacheco, the organization first caught the public's attention in the summer of 1981 during what became known as the Silver Spring monkeys case. The organization opposes factory farming, fur farming, animal testing, and other activities it considers to be exploitation of animals."
        },
        // ... more donations
    ];

    return (
        <div className="donations-list">
            {donations.map((donation, index) => (
                <div key={index} className="donation-item">
                    <img src={donation.image} alt={donation.description} />
                    <p>{donation.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ListDonations;
