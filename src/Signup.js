import React, { useState } from 'react';
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from './firebase';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [nationality, setNationality] = useState("");
    const [userType, setUserType] = useState("");
    const [charityName, setCharityName] = useState("");
    const [message, setMessage] = useState("");

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
        "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", 
        "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", 
        "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", 
        "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", 
        "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", 
        "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
        "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", 
        "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
        "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", 
        "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", 
        "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", 
        "Sri Lanka", "State of Palestine", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", 
        "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
        "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", 
        "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    const signUp = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                firstName: firstName,
                lastName: lastName,
                age: age,
                sex: sex,
                nationality: nationality,
                userType: userType,
                charityName: userType === 'charity' ? charityName : null
            });
            setMessage("Sign Up successful, Now Login using you email and password");
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setAge("");
            setSex("");
            setNationality("");
            setUserType("");
            setCharityName("");
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <div>
            <h1>Signup</h1>
            <select onChange={(e) => setUserType(e.target.value)} value={userType}>
                <option value="">Select user type</option>
                <option value="user">User</option>
                <option value="charity">Charity</option>
            </select>
            {userType === 'user' && (
                <form onSubmit={signUp}>
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                    <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age}/>
                    <input type="text" placeholder="Sex" onChange={(e) => setSex(e.target.value)} value={sex}/>
                    <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                        <option value="" disabled>Select Nationality</option>
                        {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button type="submit">Sign Up</button>
                </form>
            )}
            {userType === 'charity' && (
                <form onSubmit={signUp}>
                    <input type="text" placeholder="Charity Name" onChange={(e) => setCharityName(e.target.value)} value={charityName}/>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button type="submit">Sign Up</button>
                </form>
            )}
            {message && <h3>{message}</h3>}
        </div>
    );
};

export default Signup;
