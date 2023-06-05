import React, { useState } from 'react';
import { db, doc, setDoc } from './firebase';

const AddCharity = ({ user }) => {
    const [charityName, setCharityName] = useState("");
    const [charityInfo, setCharityInfo] = useState("");
    const [charityTarget, setCharityTarget] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, 'charities', user.uid), {
                name: charityName,
                info: charityInfo,
                target: charityTarget,
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div>
            <h1>Add Charity</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Charity Name" value={charityName} onChange={(e) => setCharityName(e.target.value)} />
                <textarea placeholder="Information about the Charity" value={charityInfo} onChange={(e) => setCharityInfo(e.target.value)}></textarea>
                <input type="number" placeholder="Target for the Charity" value={charityTarget} onChange={(e) => setCharityTarget(e.target.value)} />
                {/* TODO: Add file input for images if you want */}
                <button type="submit">Add Charity</button>
            </form>
        </div>
    )
}

export default AddCharity;
