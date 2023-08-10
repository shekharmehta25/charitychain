import React, { useState } from "react";

const DashboardCharity = ({ user, abiContractRef }) => {
  const [userDonations, setUserDonations] = useState([]);

  // Fetch all donations
  const getDonation = async () => {
    const totalDonations = await abiContractRef.current.methods
      .donationCount()
      .call();

    // Fetch donations made by the current user (donor)
    const userDonations = [];
    for (let i = 1; i <= totalDonations; i++) {
      const donation = await abiContractRef.current.methods
        .getDonation(i)
        .call();
      if (donation[0] === user.uid) {
        userDonations.push(donation);
      }
    }
    setUserDonations(userDonations);
  };

  //   useEffect(() => getDonation(), []);
  return (
    <div>
      <h1>Welcome, {user ? user.displayName : "Loading..."}</h1>
      <p>This is your dashboard. You can see all donations here.</p>
      <button onClick={getDonation}>Update Dashboard</button>
      <div style={{ margin: "20px -290px", maxWidth: "800px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Charity ID</th>
              <th style={tableHeaderStyle}>Donation Amount</th>
              <th style={tableHeaderStyle}>Donor ID</th>
              <th style={tableHeaderStyle}>Message</th>
              <th style={tableHeaderStyle}>Transaction Date</th>
              <th style={tableHeaderStyle}>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {userDonations.map((donation, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{donation[0]}</td>
                <td style={tableCellStyle}>{donation[1]}</td>
                <td style={tableCellStyle}>{donation[2]}</td>
                <td style={tableCellStyle}>{donation[3]}</td>
                <td style={tableCellStyle}>{donation[4]}</td>
                <td style={tableCellStyle}>{donation[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// CSS styles

const tableHeaderStyle = {
  border: "1px solid #ff6b81",
  padding: "8px",
  background: "#ff6b81",
  color: "#ffffff",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: "bold"
};

const tableCellStyle = {
  border: "1px solid #ff6b81",
  padding: "8px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

export default DashboardCharity;
