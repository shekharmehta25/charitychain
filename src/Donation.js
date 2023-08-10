import React, { useState, useEffect } from "react";

import { db, collection, addDoc, getDocs } from "./firebase";
import { v4 as uuidv4 } from "uuid";

const Donation = ({ user, abiContractRef, currentAccount }) => {
  console.log(user);
  const [charities, setCharities] = useState([]);
  const [selectedCharity, setSelectedCharity] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [charityAddress, setCharityAddress] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCharities = async () => {
      const charitiesCollection = collection(db, "charities");
      const charitiesSnapshot = await getDocs(charitiesCollection);
      setCharities(
        charitiesSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    fetchCharities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCharity || !donationAmount) {
      setErrorMessage("Please select a charity and enter a donation amount.");
      return;
    }
    if (!user || !user.uid) {
      setErrorMessage("Please sign in before donating.");
      return;
    }
    try {
      const transactionId = uuidv4(); // This will generate a unique ID for the transaction.
      const now = new Date();
      const transactionDate = now.toLocaleString("en-US", {
        timeZone: "America/New_York",
      });
      await abiContractRef.current.methods
        .makeDonation(
          selectedCharity,
          donationAmount,
          user.uid,
          message,
          transactionDate,
          transactionId,
          charityAddress
        )
        .send({
          from: currentAccount,
          value: Number(donationAmount) * 10 ** 18,
        })
        .on("receipt", function (receipt) {
          alert("Successfull");
        })
        .on("error", function (error) {
          console.log(error.message);
        })
        .on("myEvent", function (event) {
          alert("My event: ", event);
        });

      await addDoc(collection(db, "donor_transactions"), {
        transactionId: transactionId,
        charityId: selectedCharity,
        donorId: user.uid,
        //donorFirstName: user.firstName,
        //donorLastName: user.lastName,
        //donorEmail: user.email,
        donationAmount: donationAmount,
        message: message,
        transactionDate: transactionDate,
      });

      setSuccessMessage("Donation successful!");
      setErrorMessage(""); // Reset error message if it was previously shown
    } catch (error) {
      setErrorMessage(
        "There was a problem with your donation. Please try again."
      );
      console.error("Error adding document: ", error);
      console.log("test");
      console.log(user.firstName);
      console.log(user.uid);
    }
  };

  // Function to handle the change event when a charity is selected
  const handleCharityChange = (e) => {
    const selectedCharityId = e.target.value;
    setSelectedCharity(selectedCharityId);

    // Find the selected charity in the charities array
    const selectedCharity = charities.find(
      (charity) => charity.id === selectedCharityId
    );

    // Update the charity address in the state
    if (selectedCharity) {
      setCharityAddress(selectedCharity.address);
    }
    console.log(selectedCharityId);
    console.log(selectedCharity.address);
    console.log(charityAddress);
  };

  return (
    <div>
      <h1>Make a Donation</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedCharity} onChange={handleCharityChange}>
          <option disabled value="">
            Select a charity
          </option>
          {charities.map((charity) => (
            <option key={charity.id} value={charity.id}>
              {charity.name}
            </option>
          ))}
        </select>
        <input
          // style={{ margin: "10px" }}
          type="number"
          step="0.001"
          placeholder="Donation Amount (MATIC)"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
        <textarea
          placeholder="Add a message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Donate</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Donation;
