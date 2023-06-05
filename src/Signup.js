import React, { useState } from 'react';
import { createUserWithEmailAndPassword, setDoc, doc, auth, db } from './firebase';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [nationality, setNationality] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    const signUp = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCredential.user.uid), {
                firstName: firstName,
                lastName: lastName,
                age: age,
                sex: sex,
                nationality: nationality,
            });
            setMessage("Sign Up successful, Now Login using you email and password");
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setAge("");
            setSex("");
            setNationality("");
            history.push("/login");
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={signUp}>
                <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age}/>
                <input type="text" placeholder="Sex" onChange={(e) => setSex(e.target.value)} value={sex}/>
                <input type="text" placeholder="Nationality" onChange={(e) => setNationality(e.target.value)} value={nationality}/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <button type="submit">Sign Up</button>
            </form>
            {message && <h3>{message}</h3>}
        </div>
    );
};

export default Signup;