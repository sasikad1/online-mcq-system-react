import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/Login.css'
function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const goToHome = () => {
        navigate('/home');
    };


        const handleLogin = async (e) => {
        e.preventDefault(); // prevent page reload

        try {
            const response = await fetch(`http://localhost:8081/api/users/login?name=${name}&password=${password}`, {
                method: 'POST',
            });

            if (response.ok) {
                const data = await response.json(); // success
                navigate(`/home?userId=${data.id}`);
            } else {
                const message = await response.text();
                setError(message); // show backend message: "Invalid name or password"
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError('Something went wrong');
        }
    };
    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="m-5 form-login border p-4 rounded">
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className="form-control in"
                        id="username"
                        placeholder="Enter user name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary m-4">Submit</button>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
            <button onClick={goToHome} className="btn btn-success">Home Page</button>

        </div>
    );
}

export default Login;