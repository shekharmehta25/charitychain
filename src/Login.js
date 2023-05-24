import React, { useState } from 'react';
import { auth } from './firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log("Login Successful")
        } catch (error) {
            console.error("Error in login: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
