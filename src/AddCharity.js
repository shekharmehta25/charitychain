import React, { useState } from "react";
import { db, doc, setDoc } from "./firebase";

const AddCharity = ({ user }) => {
  const [charityName, setCharityName] = useState("");
  const [charityInfo, setCharityInfo] = useState("");
  const [charityTarget, setCharityTarget] = useState("");
  const [charityAddress, setCharityAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!charityName || !charityInfo || !charityTarget) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    try {
      await setDoc(doc(db, "charities", user.uid), {
        name: charityName,
        info: charityInfo,
        target: charityTarget,
        address: charityAddress,
      });
      setSuccessMessage("Charity added successfully");
      setErrorMessage(""); // Reset error message if it was previously shown
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>Add Charity</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Charity Name"
          value={charityName}
          onChange={(e) => setCharityName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Charity Wallet Address"
          value={charityAddress}
          onChange={(e) => setCharityAddress(e.target.value)}
        />
        <textarea
          placeholder="Information about the Charity"
          value={charityInfo}
          onChange={(e) => setCharityInfo(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Target for the Charity"
          value={charityTarget}
          onChange={(e) => setCharityTarget(e.target.value)}
        />
        {/* TODO: Add file input for images if you want */}
        <button type="submit">Add Charity</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default AddCharity;
