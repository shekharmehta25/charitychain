import React, { useState } from 'react';
import { auth } from './firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log("SignUp Successful")
        } catch (error) {
            console.error("Error in signup: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
