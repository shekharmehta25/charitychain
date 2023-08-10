import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from './firebase';
import { useHistory } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            setMessage('Logged in successfully as ' + userCredential.user.email);
            history.push('/');
            window.location.reload()
        } catch (error) {
            setMessage('Error in login: ' + error.message);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <button type="submit">Login</button>
            </form>
            {message && <h3>{message}</h3>}
        </div>
    );
};

export default Login;
