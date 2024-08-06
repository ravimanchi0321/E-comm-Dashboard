import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/signup', {
                username,
                email,
                password,
            });

            if (response.status === 201) {
                alert('User registered successfully');
            }
        } catch (error) {
            console.error('There was an error signing up!', error);
            alert('Signup failed!');
        }
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            });

            if (response.status === 200) {
                alert('User logged in successfully');
                // Handle successful login, e.g., redirect to dashboard or store token
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Login failed!');
        }
    };

    return (
        <div>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>

            {isRegister ? (
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Register</h1>
                    <div className='register'>
                        <label>Username:</label>
                        <input className="inputbox"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} placeholder="Enter Name" 
                            required
                        />
                    </div>
                    <div className='register'>
                        <label>Email:</label>
                        <input className="inputbox"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" 
                            required
                        />
                    </div>
                    <div className='register'>
                        <label>Password:</label>
                        <input className="inputbox"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" 
                            required
                        />
                    </div>
                    <button className="signebutton" type="submit">Signup</button>
                </form>
            ) : (
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <div className='login'>
                        <label>Email:</label>
                        <input className="inputbox"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" 
                            required
                        />
                    </div>
                    <div className='login'>
                        <label>Password:</label>
                        <input className="inputbox"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" 
                            required
                        />
                    </div>
                    <button className="loginbutton" type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default Auth;
